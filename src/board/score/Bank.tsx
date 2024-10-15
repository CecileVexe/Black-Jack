import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import GameContext from "../../providers/GameContext";

const Bank = () => {
  const { bank } = useContext(GameContext);
  return (
    <Grid container direction="row" alignItems="flex-start">
      <Grid item>
        <Typography variant="h5">Votre banque</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <Box
              sx={{
                width: "4rem",
                height: "4rem",
                border: "8px solid #111",
                borderRadius: "100%",
                m: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">{bank}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <img
              src="/images/coins/straight-poker-svgrepo-com.svg"
              alt="Votre banque"
              className="coin"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Bank;
