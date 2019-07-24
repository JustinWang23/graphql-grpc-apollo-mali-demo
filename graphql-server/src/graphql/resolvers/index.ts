import listBooks from './listBooks'
import author from './author'

const resolvers = {
  Query: {
    listBooks,
  },
  Books: {
    author,
  }
}

export default resolvers