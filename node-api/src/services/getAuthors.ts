import Authors from '../modals/author'

export default async(ctx: any) => {
  ctx.res = { authors: Authors }
}