# rest-graphql-example

Apollo server for 1C:Enterprise REST demo

## Start Apollo Server

yarn start

open [`http://localhost:4000/`](http://localhost:4000/) to see the [GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/)

# GraphQL Queries

## Get Data

All Goods

```GraphQL
{
  goods {
    name
  }
}
```