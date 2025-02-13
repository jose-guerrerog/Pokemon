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

export type PokemonData = {
  id: number,
  name: string,
  types: [TypePokemon],
  height: number,
  weight: number,
  stats: [string],
  sprites: {
    front_default: string,
  }
}

export type PokemonDetails = {
  capture_rate: number,
  sprites: {
    front_default: string,
  }
}

export type PokemonDetailComp = {
  id: number,
  name: string,
  types: [TypePokemon],
  height: number,
  weight: number,
  capture_rate: number,
}