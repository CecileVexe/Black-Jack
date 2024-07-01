import { Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import GameContext from "../../providers/GameContext";
import AceModal from "./AceModal";

const GenerateCard = () => {
  const { playerCards, setPlayerCards } = useContext(GameContext);
  console.log(playerCards);

  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [openAceModal, setOpenAceModal] = useState(false);
  const handleCloseAceModal = () => {
    setOpenAceModal(false);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < playerCards.length) {
        const card = playerCards[index];

        setCards((prevCards) => [
          ...prevCards,
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
          </Grid>,
        ]);
        // eslint-disable-next-line no-plusplus
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [playerCards]);

  return (
    <>
      {cards}
      <AceModal
        openModal={openAceModal}
        onCloseModal={handleCloseAceModal}
        cards={playerCards}
        setCards={setPlayerCards}
      />
    </>
  );

  //   return playerCards.map((card) => (
  //     <Grid item sx={{ textAlign: "center" }} key={`player-card-${card.card}`}>
  //       <Typography variant="body1">{card.card}</Typography>
  //       <img
  //         className="cards"
  //         src="/images/cards/2_of_clubs.svg"
  //         alt="Paquet de carte"
  //       />
  //     </Grid>
  //   ));
};

export default GenerateCard;
