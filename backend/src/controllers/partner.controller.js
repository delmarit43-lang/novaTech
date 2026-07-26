import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as partnerService from '../services/partner.service.js';

export const createPartner = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.logo = `/uploads/${req.file.filename}`;
  }
  const partner = await partnerService.createPartner(data);
  return sendResponse(res, 201, 'Partner added successfully', partner);
});

export const getAllPartners = asyncHandler(async (req, res) => {
  const { partners, meta } = await partnerService.getAllPartners(req.query);
  return sendResponse(res, 200, 'Partners fetched successfully', partners, meta);
});

export const getPartnerById = asyncHandler(async (req, res) => {
  const partner = await partnerService.getPartnerById(req.params.id);
  return sendResponse(res, 200, 'Partner details fetched successfully', partner);
});

export const updatePartner = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.logo = `/uploads/${req.file.filename}`;
  }
  const partner = await partnerService.updatePartner(req.params.id, data);
  return sendResponse(res, 200, 'Partner updated successfully', partner);
});

export const deletePartner = asyncHandler(async (req, res) => {
  const result = await partnerService.deletePartner(req.params.id);
  return sendResponse(res, 200, result.message);
});

export const togglePartnerStatus = asyncHandler(async (req, res) => {
  const partner = await partnerService.togglePartnerStatus(req.params.id);
  return sendResponse(res, 200, `Partner status changed to ${partner.status}`, partner);
});
