import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as projectRequestService from '../services/projectRequest.service.js';

export const createProjectRequest = asyncHandler(async (req, res) => {
  const projectRequest = await projectRequestService.createProjectRequest(req.body);
  return sendResponse(res, 201, 'Project request submitted successfully', projectRequest);
});

export const getAllProjectRequests = asyncHandler(async (req, res) => {
  const { requests, meta } = await projectRequestService.getAllProjectRequests(req.query);
  return sendResponse(res, 200, 'Project requests fetched successfully', requests, meta);
});

export const getProjectRequestById = asyncHandler(async (req, res) => {
  const projectRequest = await projectRequestService.getProjectRequestById(req.params.id);
  return sendResponse(res, 200, 'Project request fetched successfully', projectRequest);
});

export const updateProjectRequestStatus = asyncHandler(async (req, res) => {
  const projectRequest = await projectRequestService.updateProjectRequestStatus(
    req.params.id,
    req.body.status
  );
  return sendResponse(res, 200, `Project request status updated to ${projectRequest.status}`, projectRequest);
});

export const deleteProjectRequest = asyncHandler(async (req, res) => {
  const result = await projectRequestService.deleteProjectRequest(req.params.id);
  return sendResponse(res, 200, result.message);
});
