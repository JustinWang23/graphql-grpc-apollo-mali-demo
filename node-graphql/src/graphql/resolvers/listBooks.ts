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

interface Params {
  title: string
}

export default (root: any, params: Params) => {
  if(params.title) {
    return Books.filter((book) => book.title === params.title)
  }
  return Books
}