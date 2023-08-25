import { Cards } from "../types/cardsDeck.types";

const getHandValue = (hand: Cards[]) => {
  const handValue = hand.reduce((total, card) => {
    return total + card.value;
  }, 0);

  return handValue;
};

export default getHandValue;
