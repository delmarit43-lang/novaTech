import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as portfolioService from '../services/portfolio.service.js';

export const createPortfolio = asyncHandler(async (req, res) => {
  const data = { ...req.body };

  if (req.files) {
    if (req.files.image && req.files.image[0]) {
      data.image = `/uploads/${req.files.image[0].filename}`;
    }
    if (req.files.gallery) {
      data.gallery = req.files.gallery.map((file) => `/uploads/${file.filename}`);
    }
  }

  const portfolio = await portfolioService.createPortfolio(data);
  return sendResponse(res, 201, 'Portfolio item created successfully', portfolio);
});

export const getAllPortfolios = asyncHandler(async (req, res) => {
  const { portfolios, meta } = await portfolioService.getAllPortfolios(req.query);
  return sendResponse(res, 200, 'Portfolio items fetched successfully', portfolios, meta);
});

export const getPortfolioByIdOrSlug = asyncHandler(async (req, res) => {
  const portfolio = await portfolioService.getPortfolioByIdOrSlug(req.params.idOrSlug);
  return sendResponse(res, 200, 'Portfolio item fetched successfully', portfolio);
});

export const updatePortfolio = asyncHandler(async (req, res) => {
  const data = { ...req.body };

  if (req.files) {
    if (req.files.image && req.files.image[0]) {
      data.image = `/uploads/${req.files.image[0].filename}`;
    }
    if (req.files.gallery) {
      const newGallery = req.files.gallery.map((file) => `/uploads/${file.filename}`);
      data.gallery = data.gallery ? [...data.gallery, ...newGallery] : newGallery;
    }
  }

  const portfolio = await portfolioService.updatePortfolio(req.params.id, data);
  return sendResponse(res, 200, 'Portfolio item updated successfully', portfolio);
});

export const deletePortfolio = asyncHandler(async (req, res) => {
  const result = await portfolioService.deletePortfolio(req.params.id);
  return sendResponse(res, 200, result.message);
});

export const togglePortfolioStatus = asyncHandler(async (req, res) => {
  const portfolio = await portfolioService.togglePortfolioStatus(req.params.id);
  return sendResponse(res, 200, `Portfolio status changed to ${portfolio.status}`, portfolio);
});
