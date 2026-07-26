import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { slugify, parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const createBlogPost = async (data) => {
  const slug = data.slug ? slugify(data.slug) : slugify(data.title);

  const existing = await prisma.blogPost.findUnique({ where: { slug } });
  if (existing) {
    throw new ApiError(400, `Blog post with slug '${slug}' already exists.`);
  }

  return await prisma.blogPost.create({
    data: { ...data, slug },
  });
};

export const getAllBlogPosts = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.OR = [
      { title: { contains: query.search, mode: 'insensitive' } },
      { content: { contains: query.search, mode: 'insensitive' } },
      { author: { contains: query.search, mode: 'insensitive' } },
      { category: { contains: query.search, mode: 'insensitive' } },
      { slug: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  if (query.category) where.category = query.category;
  if (query.status) where.status = query.status;
  if (query.author) where.author = query.author;

  const [posts, total] = await Promise.all([
    prisma.blogPost.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.blogPost.count({ where }),
  ]);

  return { posts, meta: formatMeta(total, page, limit) };
};

export const getBlogPostByIdOrSlug = async (idOrSlug) => {
  const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(idOrSlug);

  const post = await prisma.blogPost.findFirst({
    where: isUuid ? { id: idOrSlug } : { slug: idOrSlug },
  });

  if (!post) {
    throw new ApiError(404, 'Blog post not found.');
  }

  return post;
};

export const updateBlogPost = async (id, data) => {
  const existing = await prisma.blogPost.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Blog post not found.');
  }

  if (data.title && !data.slug) {
    data.slug = slugify(data.title);
  } else if (data.slug) {
    data.slug = slugify(data.slug);
  }

  if (data.slug && data.slug !== existing.slug) {
    const slugExists = await prisma.blogPost.findUnique({ where: { slug: data.slug } });
    if (slugExists) {
      throw new ApiError(400, `Blog post with slug '${data.slug}' already exists.`);
    }
  }

  return await prisma.blogPost.update({
    where: { id },
    data,
  });
};

export const deleteBlogPost = async (id) => {
  const existing = await prisma.blogPost.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Blog post not found.');
  }

  await prisma.blogPost.delete({ where: { id } });
  return { message: 'Blog post deleted successfully.' };
};

export const toggleBlogPostStatus = async (id) => {
  const existing = await prisma.blogPost.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Blog post not found.');
  }

  const statusMap = {
    PUBLISHED: 'DRAFT',
    DRAFT: 'PUBLISHED',
    ARCHIVED: 'PUBLISHED',
  };
  const newStatus = statusMap[existing.status] || 'PUBLISHED';

  return await prisma.blogPost.update({
    where: { id },
    data: { status: newStatus },
  });
};
