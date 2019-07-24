import { Context } from 'mali'
import Authors from '../modals/author'

export default async(ctx: Context) => {
  ctx.res = { authors: Authors }
}