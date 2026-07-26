import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const createTestimonial = async (data) => {
  return await prisma.testimonial.create({ data });
};

export const getAllTestimonials = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.OR = [
      { clientName: { contains: query.search, mode: 'insensitive' } },
      { company: { contains: query.search, mode: 'insensitive' } },
      { position: { contains: query.search, mode: 'insensitive' } },
      { review: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  if (query.status) where.status = query.status;
  if (query.rating) where.rating = parseInt(query.rating, 10);

  const [testimonials, total] = await Promise.all([
    prisma.testimonial.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.testimonial.count({ where }),
  ]);

  return { testimonials, meta: formatMeta(total, page, limit) };
};

export const getTestimonialById = async (id) => {
  const testimonial = await prisma.testimonial.findUnique({ where: { id } });
  if (!testimonial) {
    throw new ApiError(404, 'Testimonial not found.');
  }
  return testimonial;
};

export const updateTestimonial = async (id, data) => {
  const existing = await prisma.testimonial.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Testimonial not found.');
  }

  return await prisma.testimonial.update({
    where: { id },
    data,
  });
};

export const deleteTestimonial = async (id) => {
  const existing = await prisma.testimonial.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Testimonial not found.');
  }

  await prisma.testimonial.delete({ where: { id } });
  return { message: 'Testimonial deleted successfully.' };
};

export const toggleTestimonialStatus = async (id) => {
  const existing = await prisma.testimonial.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Testimonial not found.');
  }

  const newStatus = existing.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  return await prisma.testimonial.update({
    where: { id },
    data: { status: newStatus },
  });
};
