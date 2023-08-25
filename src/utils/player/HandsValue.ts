import { Cards } from "../types/cardsDeck.types";

export const getHandValue = (hand: Cards[]) => {
  const handValue = hand.reduce((total, card) => {
    return total + card.value;
  }, 0);

  return handValue;
};

export const getRandomCard = (cards: Cards[]) => {
  const pick = Math.floor(Math.random() * cards.length);
  const card = cards[pick];
  cards.splice(pick, 1);
  return card;
};
