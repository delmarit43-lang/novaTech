import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as dashboardService from '../services/dashboard.service.js';

export const getDashboardStats = asyncHandler(async (req, res) => {
  const stats = await dashboardService.getDashboardStats();
  return sendResponse(res, 200, 'Dashboard statistics fetched successfully', stats);
});
