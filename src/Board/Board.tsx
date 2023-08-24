import { Box, Grid } from "@mui/material";
import Rules from "./Rules/Rules";

const Board = () => {
  return (
    <Box>
      <Grid container direction="row" gap={6} wrap="nowrap">
        <Grid item>
          <Rules />
        </Grid>
        <Grid item>Croupier</Grid>
        <Grid item xs={3}>
          Paquet Carte
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="space-around">
        <Grid item>
          <Grid item>Score et Banque</Grid>
        </Grid>
        <Grid item>
          <Grid item>Joueur</Grid>
        </Grid>
        <Grid item>
          <Grid item>Choix et mise</Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Board;
