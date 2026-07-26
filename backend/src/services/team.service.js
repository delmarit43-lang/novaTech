import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const createTeamMember = async (data) => {
  return await prisma.teamMember.create({ data });
};

export const getAllTeamMembers = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.OR = [
      { name: { contains: query.search, mode: 'insensitive' } },
      { position: { contains: query.search, mode: 'insensitive' } },
      { email: { contains: query.search, mode: 'insensitive' } },
      { bio: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  if (query.status) where.status = query.status;

  const [teamMembers, total] = await Promise.all([
    prisma.teamMember.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.teamMember.count({ where }),
  ]);

  return { teamMembers, meta: formatMeta(total, page, limit) };
};

export const getTeamMemberById = async (id) => {
  const teamMember = await prisma.teamMember.findUnique({ where: { id } });
  if (!teamMember) {
    throw new ApiError(404, 'Team member not found.');
  }
  return teamMember;
};

export const updateTeamMember = async (id, data) => {
  const existing = await prisma.teamMember.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Team member not found.');
  }

  return await prisma.teamMember.update({
    where: { id },
    data,
  });
};

export const deleteTeamMember = async (id) => {
  const existing = await prisma.teamMember.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Team member not found.');
  }

  await prisma.teamMember.delete({ where: { id } });
  return { message: 'Team member deleted successfully.' };
};

export const toggleTeamMemberStatus = async (id) => {
  const existing = await prisma.teamMember.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Team member not found.');
  }

  const newStatus = existing.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  return await prisma.teamMember.update({
    where: { id },
    data: { status: newStatus },
  });
};
