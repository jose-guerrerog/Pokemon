import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../utils";
import Grid from "@mui/material/Grid2";
import { PokemonDetailComp } from "../types";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const PokeDetails = ({
  name,
  id,
  height,
  weight,
  capture_rate,
}: PokemonDetailComp) => {
  const [_, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [id]);

  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ color: "#FFFFFF" }}>
              {capitalizeFirstLetter(name)}
            </Typography>
            <Typography variant="h4" sx={{ color: "#FFFFFF" }}>
              {`# ${id.toString().padStart(3, "0")}`}
            </Typography>
          </Box>
        }
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 0.5,
            mt: 3,
          }}
        >
          mkmlkmadskmaskld
        </Box>
        <Grid container>
          <Grid size={6}>
            <Box>Height</Box>
            <Box>{`${Math.round(height * 10) / 100} m`}</Box>
          </Grid>
          <Grid size={6}>
            <Box>Capture rate</Box>
            <Box>{`${Math.round(capture_rate * 100) / 100}%`}</Box>
          </Grid>
          <Grid size={6}>
            <Box>Weight</Box>
            <Box>{`${Math.round(weight * 10) / 100} Kg`}</Box>
          </Grid>
          <Grid size={6}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PokeDetails;
