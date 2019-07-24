import { Context } from 'mali'
import Books from '../modals/book'

export default async (ctx: Context) => {
  ctx.res = { books: Books }
}