import { getAllCategories, getCategoryById, createCategory } from '../models/category.js';
import { getAllAuthors, getAuthorById, createAuthor } from '../models/author.js';
import { getAllBooks, getBookById, createBook } from '../models/books.js';

const resolvers = {
  Query: {
    categories: () => getAllCategories(),
    authors: () => getAllAuthors(),
    books: () => getAllBooks(),
    category: (_, { id }) => getCategoryById(id),
    author: (_, { id }) => getAuthorById(id),
    book: (_, { id }) => getBookById(id),
  },
  Mutation: {
    createCategory: (_, { name }) => createCategory(name),
    createAuthor: (_, { name }) => createAuthor(name),
    createBook: (_, { title, categoryId, authorId }) => createBook(title, categoryId, authorId),
  },
  Category: {
    books: (parent) => getAllBooks().then(books => books.filter(book => book.categoryId === parent.id)),
  },
  Author: {
    books: (parent) => getAllBooks().then(books => books.filter(book => book.authorId === parent.id)),
  },
};

export default resolvers;
