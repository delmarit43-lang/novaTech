import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const subscribeNewsletter = async (email) => {
  const existing = await prisma.newsletterSubscriber.findUnique({ where: { email } });

  if (existing) {
    if (existing.status === 'SUBSCRIBED') {
      return { message: 'Email is already subscribed to our newsletter.', subscriber: existing };
    }
    const resubscribed = await prisma.newsletterSubscriber.update({
      where: { email },
      data: { status: 'SUBSCRIBED' },
    });
    return { message: 'Successfully resubscribed to newsletter.', subscriber: resubscribed };
  }

  const subscriber = await prisma.newsletterSubscriber.create({
    data: { email, status: 'SUBSCRIBED' },
  });

  return { message: 'Thank you for subscribing to Nova Tech newsletter.', subscriber };
};

export const getAllSubscribers = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.email = { contains: query.search, mode: 'insensitive' };
  }

  if (query.status) where.status = query.status;

  const [subscribers, total] = await Promise.all([
    prisma.newsletterSubscriber.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.newsletterSubscriber.count({ where }),
  ]);

  return { subscribers, meta: formatMeta(total, page, limit) };
};

export const updateSubscriberStatus = async (id, status) => {
  const existing = await prisma.newsletterSubscriber.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Subscriber not found.');
  }

  return await prisma.newsletterSubscriber.update({
    where: { id },
    data: { status },
  });
};

export const deleteSubscriber = async (id) => {
  const existing = await prisma.newsletterSubscriber.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Subscriber not found.');
  }

  await prisma.newsletterSubscriber.delete({ where: { id } });
  return { message: 'Subscriber removed successfully.' };
};
