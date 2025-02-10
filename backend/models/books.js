import prisma from '../config/prisma.js';

export const getAllBooks = () => prisma.book.findMany({
  include: { category: true, author: true },
});

export const getBookById = (id) => prisma.book.findUnique({
  where: { id: parseInt(id) },
  include: { category: true, author: true },
});

export const createBook = (title, categoryId, authorId) => prisma.book.create({
  data: { title, categoryId, authorId },
  include: { category: true, author: true },
});
