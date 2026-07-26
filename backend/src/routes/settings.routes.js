import { Router } from 'express';
import * as settingsController from '../controllers/settings.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/role.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadFields } from '../middlewares/upload.middleware.js';
import { updateSettingsSchema } from '../validators/settings.validator.js';

const router = Router();

const settingsUpload = uploadFields([
  { name: 'logo', maxCount: 1 },
  { name: 'favicon', maxCount: 1 },
]);

// Public route to fetch site settings
router.get('/', settingsController.getSettings);

// Protected Admin route
router.use(authenticate);
router.put('/', authorize('ADMIN'), settingsUpload, validate(updateSettingsSchema), settingsController.updateSettings);

export default router;
