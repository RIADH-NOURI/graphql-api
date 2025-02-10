import prisma from '../config/prisma.js';

export const getAllCategories = () => prisma.category.findMany({ include: { books: true } });

export const getCategoryById = (id) => prisma.category.findUnique({
  where: { id: parseInt(id) },
});

export const createCategory = (name) => prisma.category.create({
  data: { name },
});
