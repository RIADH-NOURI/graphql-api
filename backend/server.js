import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schema.js';

async function startServer() {
  const app = express(); 
  const server = new ApolloServer({ schema }); 

  await server.start();
  server.applyMiddleware({ app,path: '/graphql' });

  app.listen(4000, () => {
    console.log('Server running at http://localhost:4000/graphql');
  });
}
startServer();
