import { Box, Grid, Typography } from "@mui/material";

const Bank = () => {
  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item>
        <Typography variant="h6">Votre banque</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                border: "8px solid #111",
                borderRadius: "100%",
                m: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">500</Typography>
            </Box>
          </Grid>
          <Grid item>
            <img
              src="/images/coins/straight-poker-svgrepo-com.svg"
              alt="Votre banque"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Bank;
