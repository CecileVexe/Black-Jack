import { Grid } from "@mui/material";
import Croupier from "../croupier/Croupier";
import Choices from "./choices/Choices";
import Joueur from "./joueur/Joueur";
import Rules from "./rules/Rules";
import Score from "./score/Score";

const Board = () => {
  return (
    <Grid container direction="row" py="10px" px="20px" id="coucou">
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        wrap="nowrap"
        pb="30px"
        gap={1}
      >
        <Grid item xs={4}>
          <Rules />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ border: "5px double #eeeeee70", borderRadius: "10px" }}
        >
          <Croupier />
        </Grid>
        <Grid
          item
          sx={{
            textAlign: "center",
          }}
          xs={3}
        >
          <img
            className="cards deck"
            src="/images/cards/2_of_clubs.svg"
            alt="Paquet de carte"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        wrap="nowrap"
        gap={1}
      >
        <Grid item>
          <Score />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            border: "5px double #eeeeee70",
            borderRadius: "10px",
            display: "flex",
          }}
          p="0px"
        >
          <Joueur />
        </Grid>
        <Grid
          xs={4}
          item
          container
          p="8px"
          sx={{ border: "5px double #eeeeee70", borderRadius: "10px" }}
        >
          <Choices />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Board;
