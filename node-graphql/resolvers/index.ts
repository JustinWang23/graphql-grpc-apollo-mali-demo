const Books = [{
  title: 'Talent',
  author: {
    name: 'Justin',
    age: 26,
  },
  price: 37.8,
  categories: [
    'Education',
    'Popular',
  ]
}, {
  title: 'GraphQL',
  author: {
    name: 'Somebody',
    age: 43,
  },
  price: 102.5,
  categories: [
    'Skills',
  ]
}]

const resolvers = {
  Query: {
    listBooks: (root: any, args: any) => {
      if(args.title) {
        return Books.filter((book) => book.title === args.title)
      }
      return Books
    }
  }
}

export default resolvers