import { Router } from 'express';
import * as newsletterController from '../controllers/newsletter.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { subscribeNewsletterSchema, updateNewsletterStatusSchema } from '../validators/newsletter.validator.js';

const router = Router();

// Public newsletter subscription route
router.post('/subscribe', validate(subscribeNewsletterSchema), newsletterController.subscribeNewsletter);

// Protected Admin routes
router.use(authenticate);
router.get('/', newsletterController.getAllSubscribers);
router.patch('/:id/status', validate(updateNewsletterStatusSchema), newsletterController.updateSubscriberStatus);
router.delete('/:id', newsletterController.deleteSubscriber);

export default router;
