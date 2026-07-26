import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { slugify, parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const createService = async (data) => {
  const slug = data.slug ? slugify(data.slug) : slugify(data.title);
  
  const existing = await prisma.service.findUnique({ where: { slug } });
  if (existing) {
    throw new ApiError(400, `Service with slug '${slug}' already exists.`);
  }

  return await prisma.service.create({
    data: { ...data, slug },
  });
};

export const getAllServices = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');
  
  const where = {};
  
  if (query.search) {
    where.OR = [
      { title: { contains: query.search, mode: 'insensitive' } },
      { description: { contains: query.search, mode: 'insensitive' } },
      { category: { contains: query.search, mode: 'insensitive' } },
      { slug: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  if (query.category) where.category = query.category;
  if (query.status) where.status = query.status;
  if (query.featured !== undefined) where.featured = query.featured === 'true' || query.featured === true;

  const [services, total] = await Promise.all([
    prisma.service.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.service.count({ where }),
  ]);

  return { services, meta: formatMeta(total, page, limit) };
};

export const getServiceByIdOrSlug = async (idOrSlug) => {
  const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(idOrSlug);
  
  const service = await prisma.service.findFirst({
    where: isUuid ? { id: idOrSlug } : { slug: idOrSlug },
  });

  if (!service) {
    throw new ApiError(404, 'Service not found.');
  }

  return service;
};

export const updateService = async (id, data) => {
  const existing = await prisma.service.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Service not found.');
  }

  if (data.title && !data.slug) {
    data.slug = slugify(data.title);
  } else if (data.slug) {
    data.slug = slugify(data.slug);
  }

  if (data.slug && data.slug !== existing.slug) {
    const slugExists = await prisma.service.findUnique({ where: { slug: data.slug } });
    if (slugExists) {
      throw new ApiError(400, `Service with slug '${data.slug}' already exists.`);
    }
  }

  return await prisma.service.update({
    where: { id },
    data,
  });
};

export const deleteService = async (id) => {
  const existing = await prisma.service.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Service not found.');
  }

  await prisma.service.delete({ where: { id } });
  return { message: 'Service deleted successfully.' };
};

export const toggleServiceStatus = async (id) => {
  const existing = await prisma.service.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Service not found.');
  }

  const newStatus = existing.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  return await prisma.service.update({
    where: { id },
    data: { status: newStatus },
  });
};
