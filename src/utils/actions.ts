import { ActionsKey } from "./types/actions.types";
import PlayerChoice from "./types/playerChoices.types";

const actions: Array<ActionsKey> = [
  {
    title: "Stand",
    message: "Terminez votre tour",
    color: PlayerChoice.STAND,
  },
  {
    title: "Hit",
    message: "Piochez une carte",
    color: PlayerChoice.HIT,
  },
  {
    title: "Double down",
    message: "Doublez la mise et piochez une dernière carte",
    color: PlayerChoice.DOUBLEDOWN,
  },
];

export default actions;
