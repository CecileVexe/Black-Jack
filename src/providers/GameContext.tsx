/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from "react";
import defaultCardsDeck from "../utils/cardsDeck";
import { Cards } from "../utils/types/cardsDeck.types";
import { GameContextType } from "../utils/types/context.types";
import PlayerChoice from "../utils/types/playerChoices.types";

const GameContext = React.createContext<GameContextType>({
  cardsDeck: defaultCardsDeck,
  bank: 100,
  setBank: (_: number) => {},
  playerChoice: undefined,
  setPlayerChoice: (_: PlayerChoice) => {},
  playerCards: [],
  setPlayerCards: (_: Cards[]) => {},
  playerScore: 0,
  setPlayerScore: (_: number) => {},
  dealerCards: [],
  setDealerCards: (_: Cards[]) => {},
  dealerScore: 0,
  setDealerScore: (_: number) => {},
});

export default GameContext;

interface GameContextProps {
  children: React.ReactElement;
}

export const GameContextProvider = (props: GameContextProps) => {
  const { children } = props;
  const cardsDeck = defaultCardsDeck;
  const [bank, setBank] = useState<number>(100);
  const [playerChoice, setPlayerChoice] = useState<PlayerChoice>();
  const [playerCards, setPlayerCards] = useState<Array<Cards>>([]);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [dealerCards, setDealerCards] = useState<Array<Cards>>([]);
  const [dealerScore, setDealerScore] = useState<number>(0);

  return (
    <GameContext.Provider
      value={{
        cardsDeck,
        bank,
        setBank,
        playerChoice,
        setPlayerChoice,
        playerCards,
        setPlayerCards,
        playerScore,
        setPlayerScore,
        dealerCards,
        setDealerCards,
        dealerScore,
        setDealerScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
