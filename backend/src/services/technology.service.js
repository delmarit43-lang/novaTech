import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const createTechnology = async (data) => {
  return await prisma.technology.create({ data });
};

export const getAllTechnologies = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.OR = [
      { name: { contains: query.search, mode: 'insensitive' } },
      { category: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  if (query.category) where.category = query.category;
  if (query.status) where.status = query.status;

  const [technologies, total] = await Promise.all([
    prisma.technology.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.technology.count({ where }),
  ]);

  return { technologies, meta: formatMeta(total, page, limit) };
};

export const getTechnologyById = async (id) => {
  const tech = await prisma.technology.findUnique({ where: { id } });
  if (!tech) {
    throw new ApiError(404, 'Technology not found.');
  }
  return tech;
};

export const updateTechnology = async (id, data) => {
  const existing = await prisma.technology.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Technology not found.');
  }

  return await prisma.technology.update({
    where: { id },
    data,
  });
};

export const deleteTechnology = async (id) => {
  const existing = await prisma.technology.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Technology not found.');
  }

  await prisma.technology.delete({ where: { id } });
  return { message: 'Technology deleted successfully.' };
};

export const toggleTechnologyStatus = async (id) => {
  const existing = await prisma.technology.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Technology not found.');
  }

  const newStatus = existing.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  return await prisma.technology.update({
    where: { id },
    data: { status: newStatus },
  });
};
