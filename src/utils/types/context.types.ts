import { Cards } from "./cardsDeck.types";
import PlayerChoice from "./playerChoices.types";

export type GameContextType = {
  cardsDeck: Cards[];
  bank: number;
  setBank: (_: number) => void;
  playerChoice: PlayerChoice | undefined;
  setPlayerChoice: (_: PlayerChoice) => void;
  playerCards: Cards[];
  setPlayerCards: (_: Cards[]) => void;
  playerScore: number;
  setPlayerScore: (_: number) => void;
  dealerCards: Cards[];
  setDealerCards: (_: Cards[]) => void;
  dealerScore: number;
  setDealerScore: (_: number) => void;
};
