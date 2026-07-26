import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as authService from '../services/auth.service.js';

export const registerAdmin = asyncHandler(async (req, res) => {
  const user = await authService.registerAdmin(req.body);
  return sendResponse(res, 201, 'Admin registered successfully', user);
});

export const loginAdmin = asyncHandler(async (req, res) => {
  const result = await authService.loginAdmin(req.body);
  
  // Set refresh token in httpOnly cookie
  res.cookie('refreshToken', result.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return sendResponse(res, 200, 'Login successful', result);
});

export const logoutAdmin = asyncHandler(async (req, res) => {
  if (req.user?.id) {
    await authService.logoutAdmin(req.user.id);
  }
  res.clearCookie('refreshToken');
  return sendResponse(res, 200, 'Logged out successfully');
});

export const refreshToken = asyncHandler(async (req, res) => {
  const token = req.body.refreshToken || req.cookies?.refreshToken;
  const result = await authService.refreshAdminToken(token);

  res.cookie('refreshToken', result.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return sendResponse(res, 200, 'Token refreshed successfully', result);
});

export const forgotPassword = asyncHandler(async (req, res) => {
  const result = await authService.forgotPassword(req.body.email);
  return sendResponse(res, 200, result.message);
});

export const resetPassword = asyncHandler(async (req, res) => {
  const result = await authService.resetPassword(req.body.token, req.body.newPassword);
  return sendResponse(res, 200, result.message);
});

export const changePassword = asyncHandler(async (req, res) => {
  const result = await authService.changePassword(
    req.user.id,
    req.body.currentPassword,
    req.body.newPassword
  );
  return sendResponse(res, 200, result.message);
});

export const getProfile = asyncHandler(async (req, res) => {
  return sendResponse(res, 200, 'Profile fetched successfully', req.user);
});

export const updateProfile = asyncHandler(async (req, res) => {
  const user = await authService.updateProfile(req.user.id, req.body);
  return sendResponse(res, 200, 'Profile updated successfully', user);
});

export const uploadAvatar = asyncHandler(async (req, res) => {
  if (!req.file) {
    return sendResponse(res, 400, 'Please upload an image file.');
  }

  const avatarUrl = `/uploads/${req.file.filename}`;
  const user = await authService.uploadAvatar(req.user.id, avatarUrl);

  return sendResponse(res, 200, 'Profile picture updated successfully', user);
});
