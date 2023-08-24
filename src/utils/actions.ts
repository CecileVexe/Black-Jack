import { ActionsKey } from "./types/actions.types";

const actions: Array<ActionsKey> = [
  {
    title: "Stand",
    message: "Passez votre tour",
    color: "stand",
  },
  {
    title: "Hit",
    message: "Piochez une carte",
    color: "hit",
  },
  {
    title: "Double down",
    message: "Doublez la mise et piochez une dernière carte",
    color: "doubledown",
  },
];

export default actions;
