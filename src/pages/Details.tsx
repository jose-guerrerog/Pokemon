import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Grid2 } from "@mui/material";
import { PokemonDetails } from "../types";
import PokeCard from "../components/PokeCard";
import { PokemonData } from "../types";
import PokeDetails from "../components/PokeDetails";

const Details = () => {
  // const {name} = props.match.params;

  const [pokemonData, setPokemonData] = useState<PokemonData>();
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
  const { name } = useParams();

  console.log('name')
  console.log(name)
  
  const loadPokemon = async () => {
    try {
      console.log('name')
      console.log(name)
      const pokemonData = await api.get(`/pokemon/${name}`);
      setPokemonData(pokemonData.data);
      const pokemonDetails = await api.get(`/pokemon-species/${name}`)
      setPokemonDetails(pokemonDetails.data)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  if (!pokemonData || !pokemonDetails) {
    return null;
  }

  return (
    <Grid2>
      <PokeCard
        name={pokemonData?.name || ''}
        id={pokemonData?.id || 0}
        types={pokemonData?.types} 
        image={pokemonData.sprites.front_default}
        number="2"
      />
      <PokeDetails
        name={pokemonData?.name || ''}
        id={pokemonData?.id || 0}
        types={pokemonData?.types}
        capture_rate={pokemonDetails.capture_rate}
        height={pokemonData.height}
        weight={pokemonData.weight}
      />
    </Grid2>
  );
};

export default Details;
