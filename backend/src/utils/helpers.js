export const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start
    .replace(/-+$/, ''); // Trim - from end
};

export const parsePagination = (query) => {
  const page = Math.max(1, parseInt(query.page || '1', 10));
  const limit = Math.max(1, Math.min(100, parseInt(query.limit || '10', 10)));
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

export const formatMeta = (total, page, limit) => {
  const totalPages = Math.ceil(total / limit);
  return {
    total,
    page,
    limit,
    totalPages: totalPages || 1,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
};

export const parseSort = (query, defaultField = 'createdAt', defaultOrder = 'desc') => {
  const sortBy = query.sortBy || defaultField;
  const sortOrder = (query.sortOrder || defaultOrder).toLowerCase() === 'asc' ? 'asc' : 'desc';

  return { [sortBy]: sortOrder };
};
