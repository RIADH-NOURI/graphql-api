# GraphQL API with Express, Prisma, and PostgreSQL

## Description
This project is a GraphQL API built with Express, Prisma, and PostgreSQL. It provides an API for managing categories, authors, and books.

## Example Queries

### Fetch all books
```graphql
 query {
      books {
        id
        title
        author {
          id
          name
        }
      }
    }
```

### Fetch a specific author by ID
```graphql
query {
  author(id: 1) {
    id
    name
    books {
      title
    }
  }
}
```

### Create a new book
```graphql
mutation {
  createBook(title: "New Book", categoryId: 1, authorId: 1) {
    id
    title
  }
}
```

## GraphQL vs REST API Performance
GraphQL offers several performance advantages over REST API:

1. **Efficient Data Fetching**: Unlike REST, GraphQL allows clients to request only the needed data, reducing over-fetching and under-fetching.
2. **Single Endpoint**: REST APIs typically require multiple endpoints, whereas GraphQL operates through a single endpoint (`/graphql`).
3. **Batch Requests**: GraphQL can aggregate multiple queries into a single request, improving performance.
4. **Real-time Updates**: With GraphQL Subscriptions, real-time data updates are easier compared to REST polling.
5. **Strong Typing**: GraphQL enforces a strict schema, reducing errors and making API interactions more predictable.
## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/RIADH-NOURI/graphql-api.git
   ```
2. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```sh
   DATABASE_URL="DATABASE_URL"
   ```
4. Apply migrations:
   ```sh
   npx prisma migrate dev
   ```
5. Start the server:
   ```sh
   npm start
   ```
## Contributors
- [RIADH-NOURI](riadhnouri0502@gmail.com)

