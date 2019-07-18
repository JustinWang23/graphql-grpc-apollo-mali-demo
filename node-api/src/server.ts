import Mali from 'mali'
import path from 'path'

import getBooks from './getBooks'

const PROTO_PATH = path.resolve(__dirname, '../../', 'protos/books.proto')

const main = () => {
  const server = new Mali(PROTO_PATH)
  server.use({ getBooks })
  server.start('0.0.0.0:50051')
}

main()