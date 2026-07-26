import { Router } from 'express';
import * as heroController from '../controllers/hero.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadSingle } from '../middlewares/upload.middleware.js';
import { updateHeroSchema } from '../validators/hero.validator.js';

const router = Router();

// Public route
router.get('/', heroController.getHeroSection);

// Protected Admin route
router.use(authenticate);
router.put('/', uploadSingle('backgroundImage'), validate(updateHeroSchema), heroController.updateHeroSection);

export default router;
