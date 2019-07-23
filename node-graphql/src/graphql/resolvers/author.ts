import { GrpcClient } from '../../grpc'

interface Author {
  id: number
  name: string
  age: number
}

export default async (root: any, params: any) => {
  const client: any = new GrpcClient('0.0.0.0:50051', 'book', 'books.proto').getService('BookService')
  const result = await client.getAuthors().sendMessage()
  return result.authors.find((author: Author) => author.id === root.authorId)
}