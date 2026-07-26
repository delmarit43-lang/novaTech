import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as userService from '../services/user.service.js';

export const getUsers = asyncHandler(async (req, res) => {
  const users = await userService.listUsers();
  return sendResponse(res, 200, 'Users fetched successfully', users);
});

export const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  return sendResponse(res, 201, 'User created successfully', user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  return sendResponse(res, 200, 'User updated successfully', user);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const result = await userService.deleteUser(req.params.id, req.user.id);
  return sendResponse(res, 200, result.message);
});
