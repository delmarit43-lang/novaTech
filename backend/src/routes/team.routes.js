import { Router } from 'express';
import * as teamController from '../controllers/team.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadSingle } from '../middlewares/upload.middleware.js';
import { createTeamSchema, updateTeamSchema } from '../validators/team.validator.js';

const router = Router();

// Public routes
router.get('/', teamController.getAllTeamMembers);
router.get('/:id', teamController.getTeamMemberById);

// Protected Admin routes
router.use(authenticate);
router.post('/', uploadSingle('photo'), validate(createTeamSchema), teamController.createTeamMember);
router.put('/:id', uploadSingle('photo'), validate(updateTeamSchema), teamController.updateTeamMember);
router.delete('/:id', teamController.deleteTeamMember);
router.patch('/:id/status', teamController.toggleTeamMemberStatus);

export default router;
