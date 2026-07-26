import { ApiError } from '../utils/apiError.js';
import { Prisma } from '@prisma/client';

export const errorHandler = (err, req, res, next) => {
  let error = err;

  // Handle Prisma Known Request Errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      const target = err.meta?.target ? ` (${err.meta.target})` : '';
      error = new ApiError(409, `Resource with this value already exists${target}.`);
    } else if (err.code === 'P2025') {
      error = new ApiError(404, 'Requested record not found in database.');
    } else {
      error = new ApiError(400, `Database operation failed [${err.code}]`);
    }
  }

  // Handle Prisma Validation Errors
  if (err instanceof Prisma.PrismaClientValidationError) {
    error = new ApiError(400, 'Invalid data submitted to database.');
  }

  // Fallback for generic unexpected errors
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    error = new ApiError(statusCode, message, [], err.stack);
  }

  const response = {
    success: false,
    message: error.message,
    errors: error.errors || [],
  };

  if (process.env.NODE_ENV === 'development') {
    response.stack = error.stack;
  }

  return res.status(error.statusCode || 500).json(response);
};
