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

export default async (ctx: any) => {
  ctx.res = { books: Books }
}