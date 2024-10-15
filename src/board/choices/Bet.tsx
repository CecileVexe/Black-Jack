import { Grid, Typography } from "@mui/material";

const Bet = () => {
  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item>
        <Typography variant="h6">Votre mise</Typography>
      </Grid>
      <Grid item>
        <img
          src="/images/coins/straight-poker-svgrepo-com.svg"
          alt="Vitre mise"
          className="coin"
        />
      </Grid>
    </Grid>
  );
};

export default Bet;
