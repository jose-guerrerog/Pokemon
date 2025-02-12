import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Card, CardHeader, Grid2, Typography } from "@mui/material";
import { PokemonDetails } from "../types";

const Details = () => {
  // const {name} = props.match.params;

  const [pokemonData, setPokemonData] = useState<PokemonDetails>();
  const { name } = useParams();

  const loadPokemon = async () => {
    try {
      const pokemonData = await api.get(`/pokemon/${name}`);
      setPokemonData(pokemonData.data);
      // const pokeDetails = await api.get(`/pokemon-species/${name}`)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(pokemonData?.name);
  useEffect(() => {
    loadPokemon();
  }, []);
  return (
    <Grid2>
      <Card>
        <CardHeader>
          <Typography variant="h1">{pokemonData?.name || "ss"}</Typography>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <Typography variant="h1">{pokemonData?.name || "dasdasd"}</Typography>
        </CardHeader>
      </Card>
    </Grid2>
  );
};

export default Details;
