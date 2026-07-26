import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as serviceService from '../services/service.service.js';

export const createService = asyncHandler(async (req, res) => {
  const serviceData = { ...req.body };
  if (req.file) {
    serviceData.image = `/uploads/${req.file.filename}`;
  }
  const service = await serviceService.createService(serviceData);
  return sendResponse(res, 201, 'Service created successfully', service);
});

export const getAllServices = asyncHandler(async (req, res) => {
  const { services, meta } = await serviceService.getAllServices(req.query);
  return sendResponse(res, 200, 'Services fetched successfully', services, meta);
});

export const getServiceByIdOrSlug = asyncHandler(async (req, res) => {
  const service = await serviceService.getServiceByIdOrSlug(req.params.idOrSlug);
  return sendResponse(res, 200, 'Service details fetched successfully', service);
});

export const updateService = asyncHandler(async (req, res) => {
  const updateData = { ...req.body };
  if (req.file) {
    updateData.image = `/uploads/${req.file.filename}`;
  }
  const service = await serviceService.updateService(req.params.id, updateData);
  return sendResponse(res, 200, 'Service updated successfully', service);
});

export const deleteService = asyncHandler(async (req, res) => {
  const result = await serviceService.deleteService(req.params.id);
  return sendResponse(res, 200, result.message);
});

export const toggleServiceStatus = asyncHandler(async (req, res) => {
  const service = await serviceService.toggleServiceStatus(req.params.id);
  return sendResponse(res, 200, `Service status changed to ${service.status}`, service);
});
