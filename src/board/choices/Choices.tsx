import { Card, Grid } from "@mui/material";
import Bet from "./Bet";
import ChoicesButtons from "./ChoicesButtons";

const Choices = () => {
  return (
    <Card sx={{ px: "20px" }}>
      <Grid container direction="column" justifyContent="flex-start">
        <Grid item>
          <Bet />
        </Grid>
        <Grid item>
          <ChoicesButtons />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Choices;
