import { listBooksClient } from '../services'

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
  const result = await listBooksClient.getBooks().sendMessage()
  if(params.title) {
    return result.books.filter((book: Book) => book.title.includes(params.title))
  }
  return result.books
}