import { Grid, Typography } from "@mui/material";

import { useContext, useEffect, useState } from "react";

import GameContext from "../providers/GameContext";

import { drawRandomCard, getHandValue } from "../utils/player/JoueurUtils";

import { Cards } from "../utils/types/cardsDeck.types";

const Croupier = () => {
  const { dealerCards, setDealerCards, cardsDeck } = useContext(GameContext);
  const [pickedCards, setPickedCards] = useState<Cards[]>();
  const currentDeck = cardsDeck;
  const firstDealerHand = async () => {
    if (dealerCards.length === 0) {
      const firstCard = drawRandomCard(currentDeck);
      const secoundCard = drawRandomCard(currentDeck);

      const newCards = [...dealerCards, firstCard, secoundCard];

      setPickedCards(newCards);
    }
  };

  useEffect(() => {
    firstDealerHand();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pickedCards) {
      if (pickedCards.some((card) => card.value === 0)) {
        const handValues = getHandValue(pickedCards);
        if (handValues >= 11) {
          const newCards = pickedCards.map((card) => {
            if (card.value === 0) {
              return { ...card, value: 1 };
            }
            return card;
          });
          setDealerCards(newCards);
        } else {
          const newCards = pickedCards.map((card) => {
            if (card.value === 0) {
              return { ...card, value: 10 };
            }
            return card;
          });
          setDealerCards(newCards);
        }
      } else {
        setDealerCards(pickedCards);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [pickedCards]);

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
      <Grid item>
        <Typography variant="h6">
          {`Valeur de la main : ${getHandValue(dealerCards)}`}
        </Typography>
      </Grid>
      <Grid item container justifyContent="center" gap={2}>
        {dealerCards.length >= 1 &&
          dealerCards.map((dealerCard) => (
            <Grid
              item
              sx={{ textAlign: "center", mr: -7 }}
              key={`player-card-${dealerCard.card}`}
            >
              <img
                className="cards"
                src={dealerCard.img}
                alt="Paquet de carte"
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default Croupier;
