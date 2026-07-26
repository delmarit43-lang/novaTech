import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as galleryService from '../services/gallery.service.js';

export const createGalleryItem = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.image = `/uploads/${req.file.filename}`;
  }
  const item = await galleryService.createGalleryItem(data);
  return sendResponse(res, 201, 'Gallery item added successfully', item);
});

export const getAllGalleryItems = asyncHandler(async (req, res) => {
  const { gallery, meta } = await galleryService.getAllGalleryItems(req.query);
  return sendResponse(res, 200, 'Gallery items fetched successfully', gallery, meta);
});

export const getGalleryItemById = asyncHandler(async (req, res) => {
  const item = await galleryService.getGalleryItemById(req.params.id);
  return sendResponse(res, 200, 'Gallery item fetched successfully', item);
});

export const updateGalleryItem = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.image = `/uploads/${req.file.filename}`;
  }
  const item = await galleryService.updateGalleryItem(req.params.id, data);
  return sendResponse(res, 200, 'Gallery item updated successfully', item);
});

export const deleteGalleryItem = asyncHandler(async (req, res) => {
  const result = await galleryService.deleteGalleryItem(req.params.id);
  return sendResponse(res, 200, result.message);
});

export const toggleGalleryStatus = asyncHandler(async (req, res) => {
  const item = await galleryService.toggleGalleryStatus(req.params.id);
  return sendResponse(res, 200, `Gallery item status changed to ${item.status}`, item);
});
