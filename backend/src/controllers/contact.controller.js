import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as contactService from '../services/contact.service.js';

export const createContactMessage = asyncHandler(async (req, res) => {
  const message = await contactService.createContactMessage(req.body);
  return sendResponse(res, 201, 'Message submitted successfully. We will contact you soon.', message);
});

export const getAllContactMessages = asyncHandler(async (req, res) => {
  const { messages, meta } = await contactService.getAllContactMessages(req.query);
  return sendResponse(res, 200, 'Contact messages fetched successfully', messages, meta);
});

export const getContactMessageById = asyncHandler(async (req, res) => {
  const message = await contactService.getContactMessageById(req.params.id);
  return sendResponse(res, 200, 'Contact message fetched successfully', message);
});

export const updateContactMessageStatus = asyncHandler(async (req, res) => {
  const message = await contactService.updateContactMessageStatus(req.params.id, req.body.status);
  return sendResponse(res, 200, `Message status updated to ${message.status}`, message);
});

export const deleteContactMessage = asyncHandler(async (req, res) => {
  const result = await contactService.deleteContactMessage(req.params.id);
  return sendResponse(res, 200, result.message);
});
