import { prisma } from '../database/prisma.js';

export const getDashboardStats = async () => {
  const [
    totalProjects,
    totalServices,
    totalBlogPosts,
    totalTeamMembers,
    totalMessages,
    unreadMessages,
    pendingProjectRequests,
    totalNewsletterSubscribers,
    totalTestimonials,
    recentMessages,
    recentProjects,
  ] = await Promise.all([
    prisma.portfolio.count(),
    prisma.service.count(),
    prisma.blogPost.count(),
    prisma.teamMember.count(),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { status: 'UNREAD' } }),
    prisma.projectRequest.count({ where: { status: 'PENDING' } }),
    prisma.newsletterSubscriber.count({ where: { status: 'SUBSCRIBED' } }),
    prisma.testimonial.count(),
    prisma.contactMessage.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        service: true,
        subject: true,
        status: true,
        createdAt: true,
      },
    }),
    prisma.portfolio.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        client: true,
        industry: true,
        image: true,
        featured: true,
        status: true,
        createdAt: true,
      },
    }),
  ]);

  return {
    totals: {
      totalProjects,
      totalServices,
      totalBlogPosts,
      totalTeamMembers,
      totalMessages,
      unreadMessages,
      pendingProjectRequests,
      totalNewsletterSubscribers,
      totalTestimonials,
    },
    recentMessages,
    recentProjects,
  };
};
