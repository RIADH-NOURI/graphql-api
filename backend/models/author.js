import prisma from '../config/prisma.js';

export const getAllAuthors = () => prisma.author.findMany({ include: { books: true } });

export const getAuthorById = (id) => prisma.author.findUnique({
  where: { id: parseInt(id) },
});

export const createAuthor = (name) => prisma.author.create({
  data: { name },
});
