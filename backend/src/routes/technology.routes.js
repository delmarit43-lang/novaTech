import { Router } from 'express';
import * as technologyController from '../controllers/technology.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadSingle } from '../middlewares/upload.middleware.js';
import { createTechnologySchema, updateTechnologySchema } from '../validators/technology.validator.js';

const router = Router();

// Public routes
router.get('/', technologyController.getAllTechnologies);
router.get('/:id', technologyController.getTechnologyById);

// Protected Admin routes
router.use(authenticate);
router.post('/', uploadSingle('logo'), validate(createTechnologySchema), technologyController.createTechnology);
router.put('/:id', uploadSingle('logo'), validate(updateTechnologySchema), technologyController.updateTechnology);
router.delete('/:id', technologyController.deleteTechnology);
router.patch('/:id/status', technologyController.toggleTechnologyStatus);

export default router;
