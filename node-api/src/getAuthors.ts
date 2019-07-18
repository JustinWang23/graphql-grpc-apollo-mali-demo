const Authors = [{
  id: 1,
  name: 'Justin',
  age: 26,
}, {
  id: 2,
  name: 'Somebody',
  age: 43,
}]

export default async(ctx: any) => {
  ctx.res = { authors: Authors }
}