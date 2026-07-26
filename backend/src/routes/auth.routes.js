import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadSingle } from '../middlewares/upload.middleware.js';
import { authLimiter } from '../middlewares/rateLimiter.middleware.js';
import {
  registerAdminSchema,
  loginSchema,
  refreshTokenSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  changePasswordSchema,
  updateProfileSchema,
} from '../validators/auth.validator.js';

const router = Router();

// Public Auth Routes
router.post('/register', authLimiter, validate(registerAdminSchema), authController.registerAdmin);
router.post('/login', authLimiter, validate(loginSchema), authController.loginAdmin);
router.post('/logout', authController.logoutAdmin);
router.post('/refresh-token', validate(refreshTokenSchema), authController.refreshToken);
router.post('/forgot-password', authLimiter, validate(forgotPasswordSchema), authController.forgotPassword);
router.post('/reset-password', authLimiter, validate(resetPasswordSchema), authController.resetPassword);

// Protected Admin Auth Routes
router.use(authenticate);
router.get('/me', authController.getProfile);
router.put('/change-password', validate(changePasswordSchema), authController.changePassword);
router.put('/profile', validate(updateProfileSchema), authController.updateProfile);
router.post('/upload-avatar', uploadSingle('avatar'), authController.uploadAvatar);

export default router;
