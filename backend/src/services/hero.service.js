import { prisma } from '../database/prisma.js';

export const getHeroSection = async () => {
  let hero = await prisma.heroSection.findFirst({ where: { status: 'ACTIVE' } });
  if (!hero) {
    hero = await prisma.heroSection.findFirst();
  }
  if (!hero) {
    hero = await prisma.heroSection.create({
      data: {
        title: 'Enterprise Digital Transformation Architecture',
        subtitle: 'NEXT-GENERATION SOFTWARE ENGINEERING & AI SOLUTIONS',
        description: 'We design, build, and scale mission-critical web applications, cloud systems, and AI platforms for high-growth enterprises.',
        buttonOneText: 'Explore Solutions',
        buttonOneLink: '/services',
        buttonTwoText: 'Schedule Architecture Review',
        buttonTwoLink: '/contact',
        status: 'ACTIVE',
      },
    });
  }
  return hero;
};

export const updateHeroSection = async (data) => {
  let hero = await prisma.heroSection.findFirst();
  if (!hero) {
    return await prisma.heroSection.create({ data });
  }

  return await prisma.heroSection.update({
    where: { id: hero.id },
    data,
  });
};
