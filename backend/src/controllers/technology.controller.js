import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as technologyService from '../services/technology.service.js';

export const createTechnology = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.logo = `/uploads/${req.file.filename}`;
  }
  const tech = await technologyService.createTechnology(data);
  return sendResponse(res, 201, 'Technology added successfully', tech);
});

export const getAllTechnologies = asyncHandler(async (req, res) => {
  const { technologies, meta } = await technologyService.getAllTechnologies(req.query);
  return sendResponse(res, 200, 'Technologies fetched successfully', technologies, meta);
});

export const getTechnologyById = asyncHandler(async (req, res) => {
  const tech = await technologyService.getTechnologyById(req.params.id);
  return sendResponse(res, 200, 'Technology details fetched successfully', tech);
});

export const updateTechnology = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.logo = `/uploads/${req.file.filename}`;
  }
  const tech = await technologyService.updateTechnology(req.params.id, data);
  return sendResponse(res, 200, 'Technology updated successfully', tech);
});

export const deleteTechnology = asyncHandler(async (req, res) => {
  const result = await technologyService.deleteTechnology(req.params.id);
  return sendResponse(res, 200, result.message);
});

export const toggleTechnologyStatus = asyncHandler(async (req, res) => {
  const tech = await technologyService.toggleTechnologyStatus(req.params.id);
  return sendResponse(res, 200, `Technology status changed to ${tech.status}`, tech);
});
