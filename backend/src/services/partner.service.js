import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const createPartner = async (data) => {
  return await prisma.partner.create({ data });
};

export const getAllPartners = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.name = { contains: query.search, mode: 'insensitive' };
  }

  if (query.status) where.status = query.status;

  const [partners, total] = await Promise.all([
    prisma.partner.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.partner.count({ where }),
  ]);

  return { partners, meta: formatMeta(total, page, limit) };
};

export const getPartnerById = async (id) => {
  const partner = await prisma.partner.findUnique({ where: { id } });
  if (!partner) {
    throw new ApiError(404, 'Partner not found.');
  }
  return partner;
};

export const updatePartner = async (id, data) => {
  const existing = await prisma.partner.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Partner not found.');
  }

  return await prisma.partner.update({
    where: { id },
    data,
  });
};

export const deletePartner = async (id) => {
  const existing = await prisma.partner.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Partner not found.');
  }

  await prisma.partner.delete({ where: { id } });
  return { message: 'Partner deleted successfully.' };
};

export const togglePartnerStatus = async (id) => {
  const existing = await prisma.partner.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Partner not found.');
  }

  const newStatus = existing.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  return await prisma.partner.update({
    where: { id },
    data: { status: newStatus },
  });
};
