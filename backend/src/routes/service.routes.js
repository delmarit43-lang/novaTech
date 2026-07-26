import { Router } from 'express';
import * as serviceController from '../controllers/service.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadSingle } from '../middlewares/upload.middleware.js';
import { createServiceSchema, updateServiceSchema } from '../validators/service.validator.js';

const router = Router();

// Public routes
router.get('/', serviceController.getAllServices);
router.get('/:idOrSlug', serviceController.getServiceByIdOrSlug);

// Protected Admin routes
router.use(authenticate);
router.post('/', uploadSingle('image'), validate(createServiceSchema), serviceController.createService);
router.put('/:id', uploadSingle('image'), validate(updateServiceSchema), serviceController.updateService);
router.delete('/:id', serviceController.deleteService);
router.patch('/:id/status', serviceController.toggleServiceStatus);

export default router;
