import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
try {
  await prisma.$connect();
  const users = await prisma.user.count();
  console.log('Prisma connected. User count:', users);
} catch (e) {
  console.error('Prisma failed:', e.message);
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
