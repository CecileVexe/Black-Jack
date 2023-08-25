import { Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import GameContext from "../../providers/GameContext";
import { getHandValue, getRandomCard } from "../../utils/player/JoueurUtils";
import { Cards } from "../../utils/types/cardsDeck.types";
import AceModal from "./AceModal";
import GenerateCard from "./GenerateCard";

const Joueur = () => {
  const { playerCards, setPlayerCards, cardsDeck } = useContext(GameContext);
  const [pickedCards, setPickedCards] = useState<Cards[]>();
  const [openAceModal, setOpenAceModal] = useState(false);
  const currentDeck = cardsDeck;

  const handleCloseAceModal = () => {
    setOpenAceModal(false);
  };

  const firstPlayerHand = () => {
    if (playerCards.length === 0) {
      const firstCard = getRandomCard(currentDeck);
      const secoundCard = {
        card: "As de trèfle",
        value: 0,
        img: "/images/cards/ace_of_clubs.svg",
      };

      const newCards = [...playerCards, firstCard, secoundCard];

      setPickedCards(newCards);
    }
  };

  useEffect(() => {
    firstPlayerHand();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pickedCards) {
      if (pickedCards.some((card) => card.value === 0)) {
        if (pickedCards.findIndex((card) => card.value === 0) !== 0) {
          setPlayerCards(pickedCards.filter((card) => card.value !== 0));
        }
        setOpenAceModal(true);
      } else {
        setPlayerCards(pickedCards);
      }
    }
  }, [pickedCards]);

  return (
    <>
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
            {playerCards.length >= 1 && <GenerateCard />}
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            {`Valeur de la main : ${getHandValue(playerCards)}`}
          </Typography>
        </Grid>
      </Grid>
      {pickedCards && (
        <AceModal
          openModal={openAceModal}
          onCloseModal={handleCloseAceModal}
          cards={pickedCards}
          setCards={setPickedCards}
        />
      )}
    </>
  );
};

export default Joueur;
