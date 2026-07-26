export const sendResponse = (res, statusCode, message, data = null, meta = null) => {
  const responseBody = {
    success: statusCode >= 200 && statusCode < 300,
    message,
    data,
  };

  if (meta !== null) {
    responseBody.meta = meta;
  }

  return res.status(statusCode).json(responseBody);
};
