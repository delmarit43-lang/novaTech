import { Router } from 'express';
import * as blogController from '../controllers/blog.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadSingle } from '../middlewares/upload.middleware.js';
import { createBlogSchema, updateBlogSchema } from '../validators/blog.validator.js';

const router = Router();

// Public routes
router.get('/', blogController.getAllBlogPosts);
router.get('/:idOrSlug', blogController.getBlogPostByIdOrSlug);

// Protected Admin routes
router.use(authenticate);
router.post('/', uploadSingle('featuredImage'), validate(createBlogSchema), blogController.createBlogPost);
router.put('/:id', uploadSingle('featuredImage'), validate(updateBlogSchema), blogController.updateBlogPost);
router.delete('/:id', blogController.deleteBlogPost);
router.patch('/:id/status', blogController.toggleBlogPostStatus);

export default router;
