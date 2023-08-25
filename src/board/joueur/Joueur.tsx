import { Grid, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import GameContext from "../../providers/GameContext";
import { getHandValue, getRandomCard } from "../../utils/player/HandsValue";

const Joueur = () => {
  const { playerCards, setPlayerCards, cardsDeck } = useContext(GameContext);

  const currentDeck = cardsDeck;
  const playerPickCard = () => {
    console.log(cardsDeck);
    const firstCard = getRandomCard(currentDeck);
    console.log(firstCard);
    const secoundCard = getRandomCard(currentDeck);
    console.log(secoundCard);
    console.log(cardsDeck);
    const newCards = [...playerCards, firstCard, secoundCard];
    console.log(newCards);
    setPlayerCards(newCards);
  };

  useEffect(() => {
    playerPickCard();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid item>
        <Typography variant="h4">Joueur</Typography>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          {playerCards.map((card) => (
            <Grid
              item
              sx={{ textAlign: "center" }}
              key={`player-card-${card.card}`}
            >
              <Typography variant="body1">{card.card}</Typography>
              <img
                className="cards"
                src="/images/cards/2_of_clubs.svg"
                alt="Paquet de carte"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          {`Valeur de la main : ${getHandValue(playerCards)}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Joueur;
