import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import express from 'express'
import * as path from 'path'
import * as fs from 'fs'

import { resolvers } from './resolvers'

const schemaPublic = fs.readFileSync(path.resolve(__dirname, './schema/schema.graphql')).toString('utf8');

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [schemaPublic]
})

const server = new ApolloServer({ schema })

const app = express()

server.applyMiddleware({app})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)