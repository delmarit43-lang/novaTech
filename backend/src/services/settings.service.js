import { prisma } from '../database/prisma.js';

export const getSettings = async () => {
  let settings = await prisma.setting.findFirst();
  if (!settings) {
    settings = await prisma.setting.create({
      data: {
        companyName: 'Nova Tech',
        email: 'contact@novatech.com',
        phone: '+1 (555) 019-2834',
        address: '100 Innovation Way, Suite 400, Tech Valley, CA 94025',
        workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
        footerDescription: 'Empowering digital transformations with cutting-edge engineering solutions.',
      },
    });
  }
  return settings;
};

export const updateSettings = async (data) => {
  let settings = await prisma.setting.findFirst();
  if (!settings) {
    return await prisma.setting.create({ data });
  }

  return await prisma.setting.update({
    where: { id: settings.id },
    data,
  });
};
