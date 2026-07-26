import { Router } from 'express';
import * as contactController from '../controllers/contact.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createContactSchema, updateContactStatusSchema } from '../validators/contact.validator.js';

const router = Router();

// Public route to submit contact message
router.post('/', validate(createContactSchema), contactController.createContactMessage);

// Protected Admin routes
router.use(authenticate);
router.get('/', contactController.getAllContactMessages);
router.get('/:id', contactController.getContactMessageById);
router.patch('/:id/status', validate(updateContactStatusSchema), contactController.updateContactMessageStatus);
router.delete('/:id', contactController.deleteContactMessage);

export default router;
