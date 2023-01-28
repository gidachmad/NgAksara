export const getImage = (name) => {
  return new URL(`../assets/dashboard/${name}.svg`, import.meta.url).href
}

export const getThumbnailKelas = (name) => {
  return new URL(`../assets/Thumbnail/${name}.png`, import.meta.url).href
}

export const getKelasAksara = (kelas, name) => {
  return new URL(`../assets/${kelas}/${name}.png`, import.meta.url).href
}
