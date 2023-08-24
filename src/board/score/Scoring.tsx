import { Grid, Typography } from "@mui/material";

const Scoring = () => {
  return (
    <Grid
      container
      direction="column"
      p="10px"
      sx={{
        border: "3px solid #eeeeee70",
        borderRadius: "10px",
        width: "150px",
      }}
    >
      <Grid item>
        <Typography variant="h6">Votre Score</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">X/X</Typography>
      </Grid>
    </Grid>
  );
};

export default Scoring;
