import { ApolloServer } from 'apollo-server'

import { schema } from './graphql'

const app = new ApolloServer({ schema })

app.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})