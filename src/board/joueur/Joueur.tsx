import { Grid, Typography } from "@mui/material";

const Joueur = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4">Joueur</Typography>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item sx={{ textAlign: "center" }}>
            <img
              className="cards"
              src="/images/cards/2_of_clubs.svg"
              alt="Paquet de carte"
            />
          </Grid>
          <Grid item sx={{ textAlign: "center" }}>
            <img
              className="cards"
              src="/images/cards/2_of_clubs.svg"
              alt="Paquet de carte"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Joueur;
