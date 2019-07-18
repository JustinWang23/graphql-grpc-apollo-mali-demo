const authors = [{
  id: 1,
  name: 'Justin',
  age: 26,
}, {
  id: 2,
  name: 'Somebody',
  age: 43,
}]

export default (root: any, params: any) => {
  return authors.find((author) => author.id === root.authorId)
}