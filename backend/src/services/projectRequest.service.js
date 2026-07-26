import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const createProjectRequest = async (data) => {
  return await prisma.projectRequest.create({ data });
};

export const getAllProjectRequests = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.OR = [
      { name: { contains: query.search, mode: 'insensitive' } },
      { email: { contains: query.search, mode: 'insensitive' } },
      { company: { contains: query.search, mode: 'insensitive' } },
      { projectType: { contains: query.search, mode: 'insensitive' } },
      { description: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  if (query.status) where.status = query.status;

  const [requests, total] = await Promise.all([
    prisma.projectRequest.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.projectRequest.count({ where }),
  ]);

  return { requests, meta: formatMeta(total, page, limit) };
};

export const getProjectRequestById = async (id) => {
  const projectRequest = await prisma.projectRequest.findUnique({ where: { id } });
  if (!projectRequest) {
    throw new ApiError(404, 'Project request not found.');
  }
  return projectRequest;
};

export const updateProjectRequestStatus = async (id, status) => {
  const existing = await prisma.projectRequest.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Project request not found.');
  }

  return await prisma.projectRequest.update({
    where: { id },
    data: { status },
  });
};

export const deleteProjectRequest = async (id) => {
  const existing = await prisma.projectRequest.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Project request not found.');
  }

  await prisma.projectRequest.delete({ where: { id } });
  return { message: 'Project request deleted successfully.' };
};
