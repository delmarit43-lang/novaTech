import { Router } from 'express';
import * as testimonialController from '../controllers/testimonial.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadSingle } from '../middlewares/upload.middleware.js';
import { createTestimonialSchema, updateTestimonialSchema } from '../validators/testimonial.validator.js';

const router = Router();

// Public routes
router.get('/', testimonialController.getAllTestimonials);
router.get('/:id', testimonialController.getTestimonialById);

// Protected Admin routes
router.use(authenticate);
router.post('/', uploadSingle('photo'), validate(createTestimonialSchema), testimonialController.createTestimonial);
router.put('/:id', uploadSingle('photo'), validate(updateTestimonialSchema), testimonialController.updateTestimonial);
router.delete('/:id', testimonialController.deleteTestimonial);
router.patch('/:id/status', testimonialController.toggleTestimonialStatus);

export default router;
