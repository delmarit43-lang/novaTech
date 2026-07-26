import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as testimonialService from '../services/testimonial.service.js';

export const createTestimonial = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.photo = `/uploads/${req.file.filename}`;
  }
  const testimonial = await testimonialService.createTestimonial(data);
  return sendResponse(res, 201, 'Testimonial created successfully', testimonial);
});

export const getAllTestimonials = asyncHandler(async (req, res) => {
  const { testimonials, meta } = await testimonialService.getAllTestimonials(req.query);
  return sendResponse(res, 200, 'Testimonials fetched successfully', testimonials, meta);
});

export const getTestimonialById = asyncHandler(async (req, res) => {
  const testimonial = await testimonialService.getTestimonialById(req.params.id);
  return sendResponse(res, 200, 'Testimonial fetched successfully', testimonial);
});

export const updateTestimonial = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.photo = `/uploads/${req.file.filename}`;
  }
  const testimonial = await testimonialService.updateTestimonial(req.params.id, data);
  return sendResponse(res, 200, 'Testimonial updated successfully', testimonial);
});

export const deleteTestimonial = asyncHandler(async (req, res) => {
  const result = await testimonialService.deleteTestimonial(req.params.id);
  return sendResponse(res, 200, result.message);
});

export const toggleTestimonialStatus = asyncHandler(async (req, res) => {
  const testimonial = await testimonialService.toggleTestimonialStatus(req.params.id);
  return sendResponse(res, 200, `Testimonial status changed to ${testimonial.status}`, testimonial);
});
