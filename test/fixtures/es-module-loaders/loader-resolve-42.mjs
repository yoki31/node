export async function resolve(specifier, context, next) {
  console.log('resolve 42'); // This log is deliberate
  return next('file:///42.mjs', context);
}
