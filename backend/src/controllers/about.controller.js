import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as aboutService from '../services/about.service.js';

export const getAboutSection = asyncHandler(async (req, res) => {
  const about = await aboutService.getAboutSection();
  return sendResponse(res, 200, 'About section fetched successfully', about);
});

export const updateAboutSection = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.image = `/uploads/${req.file.filename}`;
  }
  const about = await aboutService.updateAboutSection(data);
  return sendResponse(res, 200, 'About section updated successfully', about);
});
