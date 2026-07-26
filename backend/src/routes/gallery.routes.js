import { Router } from 'express';
import * as galleryController from '../controllers/gallery.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadSingle } from '../middlewares/upload.middleware.js';
import { createGallerySchema, updateGallerySchema } from '../validators/gallery.validator.js';

const router = Router();

// Public routes
router.get('/', galleryController.getAllGalleryItems);
router.get('/:id', galleryController.getGalleryItemById);

// Protected Admin routes
router.use(authenticate);
router.post('/', uploadSingle('image'), validate(createGallerySchema), galleryController.createGalleryItem);
router.put('/:id', uploadSingle('image'), validate(updateGallerySchema), galleryController.updateGalleryItem);
router.delete('/:id', galleryController.deleteGalleryItem);
router.patch('/:id/status', galleryController.toggleGalleryStatus);

export default router;
