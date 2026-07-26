import { Router } from 'express';
import * as portfolioController from '../controllers/portfolio.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadFields } from '../middlewares/upload.middleware.js';
import { createPortfolioSchema, updatePortfolioSchema } from '../validators/portfolio.validator.js';

const router = Router();

const portfolioUpload = uploadFields([
  { name: 'image', maxCount: 1 },
  { name: 'gallery', maxCount: 10 },
]);

// Public routes
router.get('/', portfolioController.getAllPortfolios);
router.get('/:idOrSlug', portfolioController.getPortfolioByIdOrSlug);

// Protected Admin routes
router.use(authenticate);
router.post('/', portfolioUpload, validate(createPortfolioSchema), portfolioController.createPortfolio);
router.put('/:id', portfolioUpload, validate(updatePortfolioSchema), portfolioController.updatePortfolio);
router.delete('/:id', portfolioController.deletePortfolio);
router.patch('/:id/status', portfolioController.togglePortfolioStatus);

export default router;
