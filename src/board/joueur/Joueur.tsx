import { Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import GameContext from "../../providers/GameContext";
import { drawRandomCard, getHandValue } from "../../utils/player/JoueurUtils";
import { Cards } from "../../utils/types/cardsDeck.types";
import PlayerChoice from "../../utils/types/playerChoices.types";
import AceModal from "./AceModal";

const Joueur = () => {
  const {
    playerCards,
    setPlayerCards,
    cardsDeck,
    playerChoice,
    setPlayerChoice,
  } = useContext(GameContext);
  const [pickedCards, setPickedCards] = useState<Cards[]>();
  const [openAceModal, setOpenAceModal] = useState(false);
  const currentDeck = cardsDeck;

  const handleCloseAceModal = () => {
    setOpenAceModal(false);
  };

  const firstPlayerHand = () => {
    if (playerCards.length === 0) {
      const firstCard = drawRandomCard(currentDeck);
      const secoundCard = drawRandomCard(currentDeck);

      const newCards = [...playerCards, firstCard, secoundCard];

      setPickedCards(newCards);
    }
  };

  const hitANewCard = () => {
    const drawNewCard = drawRandomCard(currentDeck);
    const newCards = [...playerCards, drawNewCard];
    setPickedCards(newCards);
  };

  const doubledown = () => {
    const drawNewCard = drawRandomCard(currentDeck);
    const newCards = [...playerCards, drawNewCard];
    setPickedCards(newCards);
  };

  const stand = () => {
    console.log("fin de partie");
  };

  useEffect(() => {
    firstPlayerHand();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    switch (playerChoice) {
      case PlayerChoice.HIT:
        hitANewCard();
        break;
      case PlayerChoice.STAND:
        stand();
        break;
      case PlayerChoice.DOUBLEDOWN:
        doubledown();
        break;
      default:
        return;
    }
    setPlayerChoice(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerChoice]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {playerCards.length >= 1 &&
              playerCards.map((playerCard) => (
                <Grid
                  item
                  sx={{ textAlign: "center" }}
                  key={`player-card-${playerCard.card}`}
                >
                  <Typography variant="body1">{playerCard.card}</Typography>
                  <img
                    className="cards"
                    src={playerCard.img}
                    alt="Paquet de carte"
                  />
                </Grid>
              ))}
            {/* {playerCards.length >= 1 && <GenerateCard />} */}
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
