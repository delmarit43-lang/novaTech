import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/apiResponse.js';
import * as blogService from '../services/blog.service.js';

export const createBlogPost = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.featuredImage = `/uploads/${req.file.filename}`;
  }
  const post = await blogService.createBlogPost(data);
  return sendResponse(res, 201, 'Blog post created successfully', post);
});

export const getAllBlogPosts = asyncHandler(async (req, res) => {
  const { posts, meta } = await blogService.getAllBlogPosts(req.query);
  return sendResponse(res, 200, 'Blog posts fetched successfully', posts, meta);
});

export const getBlogPostByIdOrSlug = asyncHandler(async (req, res) => {
  const post = await blogService.getBlogPostByIdOrSlug(req.params.idOrSlug);
  return sendResponse(res, 200, 'Blog post details fetched successfully', post);
});

export const updateBlogPost = asyncHandler(async (req, res) => {
  const data = { ...req.body };
  if (req.file) {
    data.featuredImage = `/uploads/${req.file.filename}`;
  }
  const post = await blogService.updateBlogPost(req.params.id, data);
  return sendResponse(res, 200, 'Blog post updated successfully', post);
});

export const deleteBlogPost = asyncHandler(async (req, res) => {
  const result = await blogService.deleteBlogPost(req.params.id);
  return sendResponse(res, 200, result.message);
});

export const toggleBlogPostStatus = asyncHandler(async (req, res) => {
  const post = await blogService.toggleBlogPostStatus(req.params.id);
  return sendResponse(res, 200, `Blog post status changed to ${post.status}`, post);
});
