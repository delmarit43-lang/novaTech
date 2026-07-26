import { Router } from 'express';
import * as aboutController from '../controllers/about.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadSingle } from '../middlewares/upload.middleware.js';
import { updateAboutSchema } from '../validators/about.validator.js';

const router = Router();

// Public route
router.get('/', aboutController.getAboutSection);

// Protected Admin route
router.use(authenticate);
router.put('/', uploadSingle('image'), validate(updateAboutSchema), aboutController.updateAboutSection);

export default router;
