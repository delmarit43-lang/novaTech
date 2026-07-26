import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as teamService from '../services/team.service.js';

export const createTeamMember = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.photo = `/uploads/${req.file.filename}`;
  }
  const teamMember = await teamService.createTeamMember(data);
  return sendResponse(res, 201, 'Team member added successfully', teamMember);
});

export const getAllTeamMembers = asyncHandler(async (req, res) => {
  const { teamMembers, meta } = await teamService.getAllTeamMembers(req.query);
  return sendResponse(res, 200, 'Team members fetched successfully', teamMembers, meta);
});

export const getTeamMemberById = asyncHandler(async (req, res) => {
  const teamMember = await teamService.getTeamMemberById(req.params.id);
  return sendResponse(res, 200, 'Team member details fetched successfully', teamMember);
});

export const updateTeamMember = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.photo = `/uploads/${req.file.filename}`;
  }
  const teamMember = await teamService.updateTeamMember(req.params.id, data);
  return sendResponse(res, 200, 'Team member updated successfully', teamMember);
});

export const deleteTeamMember = asyncHandler(async (req, res) => {
  const result = await teamService.deleteTeamMember(req.params.id);
  return sendResponse(res, 200, result.message);
});

export const toggleTeamMemberStatus = asyncHandler(async (req, res) => {
  const teamMember = await teamService.toggleTeamMemberStatus(req.params.id);
  return sendResponse(res, 200, `Team member status changed to ${teamMember.status}`, teamMember);
});
