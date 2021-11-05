import { gql } from "apollo-server";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries/mutations that are executed against
// your data.
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  "Type matching what is returned from the API Server"
  type Product {
    "Name of the product"
    name: String!
  }

  # The "Query" type is special: it lists all of the available
  # read operations and their return types
  type Query {
    "GETs all goods from the 1C base"
    goods: [Product!]
  }
`;
