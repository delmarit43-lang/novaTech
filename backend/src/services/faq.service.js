import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const createFaq = async (data) => {
  return await prisma.fAQ.create({ data });
};

export const getAllFaqs = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.OR = [
      { question: { contains: query.search, mode: 'insensitive' } },
      { answer: { contains: query.search, mode: 'insensitive' } },
      { category: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  if (query.category) where.category = query.category;
  if (query.status) where.status = query.status;

  const [faqs, total] = await Promise.all([
    prisma.fAQ.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.fAQ.count({ where }),
  ]);

  return { faqs, meta: formatMeta(total, page, limit) };
};

export const getFaqById = async (id) => {
  const faq = await prisma.fAQ.findUnique({ where: { id } });
  if (!faq) {
    throw new ApiError(404, 'FAQ item not found.');
  }
  return faq;
};

export const updateFaq = async (id, data) => {
  const existing = await prisma.fAQ.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'FAQ item not found.');
  }

  return await prisma.fAQ.update({
    where: { id },
    data,
  });
};

export const deleteFaq = async (id) => {
  const existing = await prisma.fAQ.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'FAQ item not found.');
  }

  await prisma.fAQ.delete({ where: { id } });
  return { message: 'FAQ item deleted successfully.' };
};

export const toggleFaqStatus = async (id) => {
  const existing = await prisma.fAQ.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'FAQ item not found.');
  }

  const newStatus = existing.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  return await prisma.fAQ.update({
    where: { id },
    data: { status: newStatus },
  });
};
