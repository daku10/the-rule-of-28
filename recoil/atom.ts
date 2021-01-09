import { atom } from "recoil";
import { PossibleNumber } from "../types/type";
import {
  CURRENT_SELECT_NUMBER_KEY,
  SCORE_KEY,
  SELECTED_NUMBER_KEY,
} from "./key";

export const scoreState = atom<number>({
  key: SCORE_KEY,
  default: 0,
});

export const selectedNumberState = atom<
  [PossibleNumber, PossibleNumber, PossibleNumber]
>({ key: SELECTED_NUMBER_KEY, default: [null, null, null] });

export const currentSelectNumberState = atom<[PossibleNumber, PossibleNumber]>({
  key: CURRENT_SELECT_NUMBER_KEY,
  default: [null, null],
});
