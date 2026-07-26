import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as heroService from '../services/hero.service.js';

export const getHeroSection = asyncHandler(async (req, res) => {
  const hero = await heroService.getHeroSection();
  return sendResponse(res, 200, 'Hero section fetched successfully', hero);
});

export const updateHeroSection = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.backgroundImage = `/uploads/${req.file.filename}`;
  }
  const hero = await heroService.updateHeroSection(data);
  return sendResponse(res, 200, 'Hero section updated successfully', hero);
});
