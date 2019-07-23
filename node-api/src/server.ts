import Mali from 'mali'
import path from 'path'

import getBooks from './services/getBooks'
import getAuthors from './services/getAuthors'

import { logger } from './middlewares'

const PROTO_PATH = path.resolve(__dirname, '../../', 'protos/books.proto')

const main = () => {
  const app = new Mali(PROTO_PATH)

  app.use(logger)
  app.use({ getBooks, getAuthors })

  app.start('0.0.0.0:50051')
}

main()