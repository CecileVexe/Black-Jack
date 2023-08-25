import { Grid } from "@mui/material";
import Bank from "./Bank";
import Scoring from "./Scoring";

const Score = () => {
  return (
    <Grid container direction="column" gap={2}>
      <Grid item>
        <Scoring />
      </Grid>
      <Grid item>
        <Bank />
      </Grid>
    </Grid>
  );
};

export default Score;
