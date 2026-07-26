import { Router } from 'express';
import * as projectRequestController from '../controllers/projectRequest.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createProjectRequestSchema, updateProjectRequestStatusSchema } from '../validators/projectRequest.validator.js';

const router = Router();

// Public route to submit project request
router.post('/', validate(createProjectRequestSchema), projectRequestController.createProjectRequest);

// Protected Admin routes
router.use(authenticate);
router.get('/', projectRequestController.getAllProjectRequests);
router.get('/:id', projectRequestController.getProjectRequestById);
router.patch('/:id/status', validate(updateProjectRequestStatusSchema), projectRequestController.updateProjectRequestStatus);
router.delete('/:id', projectRequestController.deleteProjectRequest);

export default router;
