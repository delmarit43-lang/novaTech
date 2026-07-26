import { prisma } from '../database/prisma.js';
import { ApiError } from '../utils/apiError.js';
import { slugify, parsePagination, formatMeta, parseSort } from '../utils/helpers.js';

export const createPortfolio = async (data) => {
  const slug = data.slug ? slugify(data.slug) : slugify(data.title);

  const existing = await prisma.portfolio.findUnique({ where: { slug } });
  if (existing) {
    throw new ApiError(400, `Portfolio project with slug '${slug}' already exists.`);
  }

  return await prisma.portfolio.create({
    data: { ...data, slug },
  });
};

export const getAllPortfolios = async (query) => {
  const { page, limit, skip } = parsePagination(query);
  const orderBy = parseSort(query, 'createdAt', 'desc');

  const where = {};

  if (query.search) {
    where.OR = [
      { title: { contains: query.search, mode: 'insensitive' } },
      { description: { contains: query.search, mode: 'insensitive' } },
      { client: { contains: query.search, mode: 'insensitive' } },
      { industry: { contains: query.search, mode: 'insensitive' } },
      { slug: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  if (query.industry) where.industry = query.industry;
  if (query.status) where.status = query.status;
  if (query.featured !== undefined) where.featured = query.featured === 'true' || query.featured === true;

  const [portfolios, total] = await Promise.all([
    prisma.portfolio.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.portfolio.count({ where }),
  ]);

  return { portfolios, meta: formatMeta(total, page, limit) };
};

export const getPortfolioByIdOrSlug = async (idOrSlug) => {
  const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(idOrSlug);

  const portfolio = await prisma.portfolio.findFirst({
    where: isUuid ? { id: idOrSlug } : { slug: idOrSlug },
  });

  if (!portfolio) {
    throw new ApiError(404, 'Portfolio item not found.');
  }

  return portfolio;
};

export const updatePortfolio = async (id, data) => {
  const existing = await prisma.portfolio.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Portfolio item not found.');
  }

  if (data.title && !data.slug) {
    data.slug = slugify(data.title);
  } else if (data.slug) {
    data.slug = slugify(data.slug);
  }

  if (data.slug && data.slug !== existing.slug) {
    const slugExists = await prisma.portfolio.findUnique({ where: { slug: data.slug } });
    if (slugExists) {
      throw new ApiError(400, `Portfolio project with slug '${data.slug}' already exists.`);
    }
  }

  return await prisma.portfolio.update({
    where: { id },
    data,
  });
};

export const deletePortfolio = async (id) => {
  const existing = await prisma.portfolio.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Portfolio item not found.');
  }

  await prisma.portfolio.delete({ where: { id } });
  return { message: 'Portfolio item deleted successfully.' };
};

export const togglePortfolioStatus = async (id) => {
  const existing = await prisma.portfolio.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, 'Portfolio item not found.');
  }

  const newStatus = existing.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  return await prisma.portfolio.update({
    where: { id },
    data: { status: newStatus },
  });
};
