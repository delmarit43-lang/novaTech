import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const createGalleryItem = async (data) => {
  return await prisma.galleryItem.create({ data });
};

export const getAllGalleryItems = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.OR = [
      { title: { contains: query.search, mode: 'insensitive' } },
      { category: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  if (query.category) where.category = query.category;
  if (query.status) where.status = query.status;

  const [gallery, total] = await Promise.all([
    prisma.galleryItem.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.galleryItem.count({ where }),
  ]);

  return { gallery, meta: formatMeta(total, page, limit) };
};

export const getGalleryItemById = async (id) => {
  const item = await prisma.galleryItem.findUnique({ where: { id } });
  if (!item) {
    throw new ApiError(404, 'Gallery item not found.');
  }
  return item;
};

export const updateGalleryItem = async (id, data) => {
  const existing = await prisma.galleryItem.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Gallery item not found.');
  }

  return await prisma.galleryItem.update({
    where: { id },
    data,
  });
};

export const deleteGalleryItem = async (id) => {
  const existing = await prisma.galleryItem.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Gallery item not found.');
  }

  await prisma.galleryItem.delete({ where: { id } });
  return { message: 'Gallery item deleted successfully.' };
};

export const toggleGalleryStatus = async (id) => {
  const existing = await prisma.galleryItem.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Gallery item not found.');
  }

  const newStatus = existing.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  return await prisma.galleryItem.update({
    where: { id },
    data: { status: newStatus },
  });
};
