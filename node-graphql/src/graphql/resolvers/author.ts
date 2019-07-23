import { listBooksClient } from '../services'

interface Author {
  id: number
  name: string
  age: number
}

export default async (root: any, params: any) => {
  const result = await listBooksClient.getAuthors().sendMessage()
  return result.authors.find((author: Author) => author.id === root.authorId)
}