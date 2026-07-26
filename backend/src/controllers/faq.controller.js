import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as faqService from '../services/faq.service.js';

export const createFaq = asyncHandler(async (req, res) => {
  const faq = await faqService.createFaq(req.body);
  return sendResponse(res, 201, 'FAQ item created successfully', faq);
});

export const getAllFaqs = asyncHandler(async (req, res) => {
  const { faqs, meta } = await faqService.getAllFaqs(req.query);
  return sendResponse(res, 200, 'FAQ items fetched successfully', faqs, meta);
});

export const getFaqById = asyncHandler(async (req, res) => {
  const faq = await faqService.getFaqById(req.params.id);
  return sendResponse(res, 200, 'FAQ item fetched successfully', faq);
});

export const updateFaq = asyncHandler(async (req, res) => {
  const faq = await faqService.updateFaq(req.params.id, req.body);
  return sendResponse(res, 200, 'FAQ item updated successfully', faq);
});

export const deleteFaq = asyncHandler(async (req, res) => {
  const result = await faqService.deleteFaq(req.params.id);
  return sendResponse(res, 200, result.message);
});

export const toggleFaqStatus = asyncHandler(async (req, res) => {
  const faq = await faqService.toggleFaqStatus(req.params.id);
  return sendResponse(res, 200, `FAQ status changed to ${faq.status}`, faq);
});
