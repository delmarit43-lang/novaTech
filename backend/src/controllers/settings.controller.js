import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as settingsService from '../services/settings.service.js';

export const getSettings = asyncHandler(async (req, res) => {
  const settings = await settingsService.getSettings();
  return sendResponse(res, 200, 'Settings fetched successfully', settings);
});

export const updateSettings = asyncHandler(async (req, res) => {
  const data = { ...req.body };

  if (req.files) {
    if (req.files.logo && req.files.logo[0]) {
      data.logo = `/uploads/${req.files.logo[0].filename}`;
    }
    if (req.files.favicon && req.files.favicon[0]) {
      data.favicon = `/uploads/${req.files.favicon[0].filename}`;
    }
  }

  const settings = await settingsService.updateSettings(data);
  return sendResponse(res, 200, 'Settings updated successfully', settings);
});
