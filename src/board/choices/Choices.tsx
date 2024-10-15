import { Card, Grid } from "@mui/material";
import Bet from "./Bet";
import ChoicesButtons from "./ChoicesButtons";

const Choices = () => {
  return (
    <Card sx={{ px: "20px", width: "100%" }}>
      <Grid container direction="column" justifyContent="space-evenly">
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
