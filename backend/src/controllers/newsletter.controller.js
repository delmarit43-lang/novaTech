import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as newsletterService from '../services/newsletter.service.js';

export const subscribeNewsletter = asyncHandler(async (req, res) => {
  const result = await newsletterService.subscribeNewsletter(req.body.email);
  return sendResponse(res, 200, result.message, result.subscriber);
});

export const getAllSubscribers = asyncHandler(async (req, res) => {
  const { subscribers, meta } = await newsletterService.getAllSubscribers(req.query);
  return sendResponse(res, 200, 'Newsletter subscribers fetched successfully', subscribers, meta);
});

export const updateSubscriberStatus = asyncHandler(async (req, res) => {
  const subscriber = await newsletterService.updateSubscriberStatus(req.params.id, req.body.status);
  return sendResponse(res, 200, `Subscriber status updated to ${subscriber.status}`, subscriber);
});

export const deleteSubscriber = asyncHandler(async (req, res) => {
  const result = await newsletterService.deleteSubscriber(req.params.id);
  return sendResponse(res, 200, result.message);
});
