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