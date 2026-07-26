import { upload } from '../config/multer.js';
import { ApiError } from '../utils/apiError.js';

export const uploadSingle = (fieldName) => {
  return (req, res, next) => {
    upload.single(fieldName)(req, res, (err) => {
      if (err) {
        if (err instanceof ApiError) return next(err);
        return next(new ApiError(400, err.message));
      }
      next();
    });
  };
};

export const uploadMultiple = (fieldName, maxCount = 10) => {
  return (req, res, next) => {
    upload.array(fieldName, maxCount)(req, res, (err) => {
      if (err) {
        if (err instanceof ApiError) return next(err);
        return next(new ApiError(400, err.message));
      }
      next();
    });
  };
};

export const uploadFields = (fields) => {
  return (req, res, next) => {
    upload.fields(fields)(req, res, (err) => {
      if (err) {
        if (err instanceof ApiError) return next(err);
        return next(new ApiError(400, err.message));
      }
      next();
    });
  };
};
