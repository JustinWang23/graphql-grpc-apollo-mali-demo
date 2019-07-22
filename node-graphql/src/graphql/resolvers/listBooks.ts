import { GrpcClient } from '../../grpc'

const Books = [{
  id: 1,
  title: 'Talent',
  price: 37.8,
  categories: [
    'Education',
    'Popular',
  ],
  authorId: 1,
}, {
  id: 2,
  title: 'GraphQL',
  price: 102.5,
  categories: [
    'Skills',
  ],
  authorId: 2,
}, {
  id: 3,
  title: 'Talent is not enough',
  price: 146.2,
  categories: [
    'Skills',
    'Popular',
  ],
  authorId: 1,
}]

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