const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    title: String,
    text: String
  }
`;

module.exports = typeDefs;
