export type TypePokemon = {
  type: {
    name: string,
    url: string, 
  },
}

export type Pokemon = {
  id: number,
  name: string,
  types: [TypePokemon],
  number: string,
  image: string,
}

export type PokemonDetails = {
  id: number,
  name: string,
  types: [TypePokemon],
  height: number,
  width: number,
  stats: [string]
}