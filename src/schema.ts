// schema.js
const { gql } = require("apollo-server-express");
// eslint-disable-next-line no-unused-vars

const schema = gql`
  type Query {
    hello: String!
  }
`;

module.exports = schema;
