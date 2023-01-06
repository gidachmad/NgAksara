export const getImage = (name) => {
  const path = new URL(`../assets/dashboard/${name}.svg`, import.meta.url).href
  return path
}
