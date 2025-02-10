import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
    books: [Book!]
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]
  }

  type Book {
    id: ID!
    title: String!
    category: Category!
    author: Author!
  }

  type Query {
    categories: [Category!]
    authors: [Author!]
    books: [Book!]
    category(id: ID!): Category
    author(id: ID!): Author
    book(id: ID!): Book
  }

  type Mutation {
    createCategory(name: String!): Category!
    createAuthor(name: String!): Author!
    createBook(title: String!, categoryId: Int!, authorId: Int!): Book!
  }
`;

export default typeDefs;
