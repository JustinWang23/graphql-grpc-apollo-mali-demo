import { makeExecutableSchema } from 'apollo-server-express'
import * as path from 'path'
import * as fs from 'fs'

import { resolvers } from './resolvers'

const schemaPublic = fs.readFileSync(path.resolve(__dirname, './schema/schema.graphql')).toString('utf8')

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [schemaPublic]
})