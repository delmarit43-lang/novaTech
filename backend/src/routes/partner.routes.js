import { Router } from 'express';
import * as partnerController from '../controllers/partner.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { uploadSingle } from '../middlewares/upload.middleware.js';
import { createPartnerSchema, updatePartnerSchema } from '../validators/partner.validator.js';

const router = Router();

// Public routes
router.get('/', partnerController.getAllPartners);
router.get('/:id', partnerController.getPartnerById);

// Protected Admin routes
router.use(authenticate);
router.post('/', uploadSingle('logo'), validate(createPartnerSchema), partnerController.createPartner);
router.put('/:id', uploadSingle('logo'), validate(updatePartnerSchema), partnerController.updatePartner);
router.delete('/:id', partnerController.deletePartner);
router.patch('/:id/status', partnerController.togglePartnerStatus);

export default router;
