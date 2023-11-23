const dotenv = require("dotenv");
dotenv.config();

import "./db";
import express from "express";
import { ApolloServer } from "apollo-server-express";
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

// Start the server
server
  .start()
  .then(() => {
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server", error);
  });
