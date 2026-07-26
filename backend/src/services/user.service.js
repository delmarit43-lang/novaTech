import bcrypt from 'bcryptjs';
import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';

const publicSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  avatar: true,
  createdAt: true,
  updatedAt: true,
};

export const listUsers = async () => {
  return prisma.user.findMany({
    select: publicSelect,
    orderBy: { createdAt: 'desc' },
  });
};

export const createUser = async ({ name, email, password, role }) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new ApiError(400, 'A user with this email already exists.');
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  return prisma.user.create({
    data: { name, email, password: hashedPassword, role },
    select: publicSelect,
  });
};

export const updateUser = async (id, data) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new ApiError(404, 'User not found.');
  }

  if (data.email && data.email !== user.email) {
    const taken = await prisma.user.findUnique({ where: { email: data.email } });
    if (taken) {
      throw new ApiError(400, 'Email is already in use.');
    }
  }

  const updateData = { ...data };
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 12);
  }

  return prisma.user.update({
    where: { id },
    data: updateData,
    select: publicSelect,
  });
};

export const deleteUser = async (id, requesterId) => {
  if (id === requesterId) {
    throw new ApiError(400, 'You cannot delete your own account.');
  }

  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new ApiError(404, 'User not found.');
  }

  await prisma.user.delete({ where: { id } });
  return { message: 'User deleted successfully.' };
};
