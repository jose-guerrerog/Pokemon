import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../utils";
// import { Link } from "react-router-dom";

// import { GetImageById } from "../../functions/utils";

// import pokemon_placeholder from "../../assets/img/pokemon-placeholder.png";
import { Pokemon } from "../types";
import { getImageById } from "../utils";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";
import { mapTypeBackground, mapTypeColor } from "../constants";

const PokeCard = ({ name, id, types, image }: Pokemon) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [id]);

  return (
    <Card
      sx={{
        height: "280px",
        background: mapTypeBackground.get(types[0].type.name),
      }}
    >
      <CardHeader
        title={
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "#FFFFFF" }}>
              {capitalizeFirstLetter(name)}
            </Typography>
            <Typography sx={{ color: "#FFFFFF" }}>
              {`# ${id.toString().padStart(3, "0")}`}
            </Typography>
          </Box>
        }
      />
      <CardContent>
        <img
          onError={() => setError(true)}
          className="animation-up-down"
          alt={name}
          title={name}
          src={image}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          {types.map((item, index) => {
            console.log(item.type.name);
            return (
              <Chip
                label={item.type.name}
                key={index}
                sx={{
                  background: mapTypeColor.get(item.type.name),
                }}
              />
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokeCard;
