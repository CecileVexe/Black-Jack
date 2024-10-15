import { Grid, Typography } from "@mui/material";

const Croupier = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      gap={2}
      sx={{ p: 2 }}
    >
      <Grid item>
        <Typography variant="h5">Croupier</Typography>
      </Grid>
      <Grid item container alignItems="center" gap={2}>
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
        {/* {playerCards.length >= 1 &&
          playerCards.map((playerCard) => (
            <Grid
              item
              sx={{ textAlign: "center", mr: -7 }}
              key={`player-card-${playerCard.card}`}
            >
              <img
                className="cards"
                src={playerCard.img}
                alt="Paquet de carte"
              />
            </Grid>
          ))} */}
      </Grid>
    </Grid>
  );
};

export default Croupier;
