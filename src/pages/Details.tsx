import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Grid2 } from "@mui/material";
import { PokemonDetails } from "../types";
import PokeCard from "../components/PokeCard";
import PokeDetails from "../components/PokeDetails";

type Item = {
  ability: {
    name: string
  }
}

const Details = () => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
  const { name } = useParams();

  const loadPokemon = async () => {
    try {
      const pokemonData = await api.get(`/pokemon/${name}`);
      const dataPokemonData = pokemonData.data;
      const pokemonAddDetails = await api.get(`/pokemon-species/${name}`)
      const dataPokemonAddDetails = pokemonAddDetails.data

      let abilities = '';
      dataPokemonData.abilities.map((item: Item, index: number) => {
        abilities += `${item.ability.name}${dataPokemonData.abilities.length === index + 1 ? "" : ", "}`
      })

      const pokemonDetails = {
        id: dataPokemonData.id,
        name: dataPokemonData.name,
        types: dataPokemonData.types,
        height: dataPokemonData.height,
        weight: dataPokemonData.weight,
        stats: dataPokemonData.stats,
        image: dataPokemonData.sprites.front_default,
        gender_rate: dataPokemonAddDetails.gender_rate,
        capture_rate: dataPokemonAddDetails.capture_rate,
        habitat: dataPokemonAddDetails.habitat?.name,
        abilities,
      }
      setPokemonDetails(pokemonDetails)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  if (!pokemonDetails) {
    return null;
  }

  return (
    <Grid2>
      <PokeCard
        name={pokemonDetails?.name || ''}
        id={pokemonDetails?.id || 0}
        types={pokemonDetails?.types} 
        image={pokemonDetails.image}
        number="2"
      />
      <PokeDetails
        name={pokemonDetails?.name || ''}
        id={pokemonDetails?.id || 0}
        types={pokemonDetails?.types}
        capture_rate={pokemonDetails.capture_rate}
        height={pokemonDetails.height}
        weight={pokemonDetails.weight}
        abilities={pokemonDetails.abilities}
        habitat={pokemonDetails.habitat}
      />
    </Grid2>
  );
};

export default Details;
