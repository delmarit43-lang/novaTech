import { Router } from 'express';
import * as faqController from '../controllers/faq.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createFaqSchema, updateFaqSchema } from '../validators/faq.validator.js';

const router = Router();

// Public routes
router.get('/', faqController.getAllFaqs);
router.get('/:id', faqController.getFaqById);

// Protected Admin routes
router.use(authenticate);
router.post('/', validate(createFaqSchema), faqController.createFaq);
router.put('/:id', validate(updateFaqSchema), faqController.updateFaq);
router.delete('/:id', faqController.deleteFaq);
router.patch('/:id/status', faqController.toggleFaqStatus);

export default router;
