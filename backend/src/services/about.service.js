import { prisma } from '../database/prisma.js';

export const getAboutSection = async () => {
  let about = await prisma.aboutSection.findFirst();
  if (!about) {
    about = await prisma.aboutSection.create({
      data: {
        title: 'Architecting High-Performance Digital Platforms',
        description: 'Nova Tech is an elite technology engineering agency specializing in bespoke web services, cloud microservices, and AI-driven automation systems.',
        mission: 'Deliver ultra-reliable, high-scalability digital systems that give enterprise clients a decisive competitive advantage.',
        vision: 'To be the global benchmark for modern software architecture, technical craftsmanship, and digital engineering excellence.',
      },
    });
  }
  return about;
};

export const updateAboutSection = async (data) => {
  let about = await prisma.aboutSection.findFirst();
  if (!about) {
    return await prisma.aboutSection.create({ data });
  }

  return await prisma.aboutSection.update({
    where: { id: about.id },
    data,
  });
};
