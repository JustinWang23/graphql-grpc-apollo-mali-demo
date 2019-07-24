# GraphQL + gRPC

This is a sample project using [Apollo](https://www.apollographql.com/docs/apollo-server/) as an isolate [GraphQL](https://graphql.org/) server and using [Mali](https://mali.js.org/) as a [gRPC](https://grpc.io/) backend microservice server.

## Installation

```
git clone git@github.com:JustinWang23/graphql-grpc-apollo-mali-api.git

cd node-graphql

# or if you are using npm: npm install
yarn  
```

## Usage

start graphql server

```
# cd node-graphql

yarn start
```

Then you will see the GraphQL playground running `🚀 Server ready at http://localhost:4000/graphql`

start microservices server

```
# cd node-api

yarn start
```

Now you can connect to the microservices at `localhost:50051` via gRPC

## Example

First, we define a schema for GraphQL

```
type Books {
  id: Int
  title: String
  author: Author
  price: Float
  categories: [String]
}

type Author {
  id: Int
  name: String
  age: Int
}

type Query {
  listBooks(title: String): [Books]
}

schema {
  query: Query
}
```

Then, you can make queries for what data you want to fetch

```
query {
  listBooks {
    title
    categories
    author {
      name
    }
  }
}
```

Afterwards, you can get the result based on your queries

```
{
  "data": {
    "listBooks": [
      {
        "title": "Talent",
        "categories": [
          "Education",
          "Popular"
        ],
        "author": {
          "name": "Justin"
        }
      },
      {
        "title": "GraphQL",
        "categories": [
          "Skills"
        ],
        "author": {
          "name": "Somebody"
        }
      },
      {
        "title": "Talent is not enough",
        "categories": [
          "Skills",
          "Popular"
        ],
        "author": {
          "name": "Justin"
        }
      }
    ]
  }
}
```