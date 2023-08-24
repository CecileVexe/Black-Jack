import { Box, Grid } from "@mui/material";
import Croupier from "../croupier/Croupier";
import Joueur from "./joueur/Joueur";
import Rules from "./rules/Rules";

const Board = () => {
  return (
    <Box py="20px">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        gap={6}
        wrap="nowrap"
      >
        <Grid item xs={4}>
          <Rules />
        </Grid>
        <Grid item>
          <Croupier />
        </Grid>
        <Grid item sx={{ textAlign: "center" }} xs={3}>
          <img
            className="cards"
            src="/images/cards/2_of_clubs.svg"
            alt="Paquet de carte"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        gap={6}
        wrap="nowrap"
      >
        <Grid item>
          <Grid item>Score et Banque</Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <Joueur />
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>Choix et mise</Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Board;
