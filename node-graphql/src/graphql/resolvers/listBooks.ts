import { GrpcClient } from '../../grpc'

interface Params {
  title: string
}

interface Book {
  id: number 
  title: string
  price: number
  categories: string[]
  authorId: number
}

export default async (root: any, params: Params) => {
  const client: any = new GrpcClient('0.0.0.0:50051', 'book', 'books.proto').getService('BookService')
  const result = await client.getBooks().sendMessage()
  if(params.title) {
    return result.books.filter((book: Book) => book.title.includes(params.title))
  }
  return result.books
}