import { Context } from 'mali'

export const logger = async (ctx: Context, next: any) => {
  await next()
  console.log('%s [%s]', ctx.name, ctx.type);
}