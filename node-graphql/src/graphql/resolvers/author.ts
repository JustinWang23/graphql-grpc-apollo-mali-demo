const Authors = [{
  id: 1,
  name: 'Justin',
  age: 26,
}, {
  id: 2,
  name: 'Somebody',
  age: 43,
}]

interface Author {
  id: number
  name: string
  age: number
}

export default (root: any, params: any) => {
  return Authors.find((author: Author) => author.id === root.authorId)
}