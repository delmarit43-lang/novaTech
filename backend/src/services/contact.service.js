import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { parsePagination, formatMeta, parseSort } from '../utils/helpers.js';
import { sendContactConfirmationEmail } from './email.service.js';

export const createContactMessage = async (data) => {
  const message = await prisma.contactMessage.create({ data });
  
  // Async send email confirmation
  sendContactConfirmationEmail(data.email, data.name).catch(() => {});
  
  return message;
};

export const getAllContactMessages = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.OR = [
      { name: { contains: query.search, mode: 'insensitive' } },
      { email: { contains: query.search, mode: 'insensitive' } },
      { subject: { contains: query.search, mode: 'insensitive' } },
      { message: { contains: query.search, mode: 'insensitive' } },
      { company: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  if (query.status) where.status = query.status;

  const [messages, total] = await Promise.all([
    prisma.contactMessage.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.contactMessage.count({ where }),
  ]);

  return { messages, meta: formatMeta(total, page, limit) };
};

export const getContactMessageById = async (id) => {
  const message = await prisma.contactMessage.findUnique({ where: { id } });
  if (!message) {
    throw new ApiError(404, 'Contact message not found.');
  }

  // Auto update UNREAD to READ when fetched directly
  if (message.status === 'UNREAD') {
    await prisma.contactMessage.update({
      where: { id },
      data: { status: 'READ' },
    });
    message.status = 'READ';
  }

  return message;
};

export const updateContactMessageStatus = async (id, status) => {
  const existing = await prisma.contactMessage.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Contact message not found.');
  }

  return await prisma.contactMessage.update({
    where: { id },
    data: { status },
  });
};

export const deleteContactMessage = async (id) => {
  const existing = await prisma.contactMessage.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Contact message not found.');
  }

  await prisma.contactMessage.delete({ where: { id } });
  return { message: 'Contact message deleted successfully.' };
};
