import Books from '../modals/book'

export default async (ctx: any) => {
  ctx.res = { books: Books }
}