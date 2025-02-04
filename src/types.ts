export type TypePokemon = {
  type: {
    name: string,
    url: string, 
  },
}

export type Pokemon = {
  name: string,
  id: number,
  types: [TypePokemon],
  number: string,
  image: string,
}