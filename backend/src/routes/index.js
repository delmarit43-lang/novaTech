import { Router } from 'express';
import authRoutes from './auth.routes.js';
import dashboardRoutes from './dashboard.routes.js';
import serviceRoutes from './service.routes.js';
import portfolioRoutes from './portfolio.routes.js';
import teamRoutes from './team.routes.js';
import testimonialRoutes from './testimonial.routes.js';
import blogRoutes from './blog.routes.js';
import faqRoutes from './faq.routes.js';
import contactRoutes from './contact.routes.js';
import projectRequestRoutes from './projectRequest.routes.js';
import settingsRoutes from './settings.routes.js';
import heroRoutes from './hero.routes.js';
import aboutRoutes from './about.routes.js';
import technologyRoutes from './technology.routes.js';
import partnerRoutes from './partner.routes.js';
import galleryRoutes from './gallery.routes.js';
import newsletterRoutes from './newsletter.routes.js';
import userRoutes from './user.routes.js';

const router = Router();

// Master API v1 Route Registrations
router.use('/auth', authRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/services', serviceRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/team', teamRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/blog', blogRoutes);
router.use('/faq', faqRoutes);
router.use('/contact', contactRoutes);
router.use('/project-requests', projectRequestRoutes);
router.use('/settings', settingsRoutes);
router.use('/hero', heroRoutes);
router.use('/about', aboutRoutes);
router.use('/technologies', technologyRoutes);
router.use('/partners', partnerRoutes);
router.use('/gallery', galleryRoutes);
router.use('/newsletter', newsletterRoutes);
router.use('/users', userRoutes);

export default router;
