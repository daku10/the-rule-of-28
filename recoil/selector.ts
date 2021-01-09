import {
  currentSelectNumberState,
  scoreState,
  selectedNumberState,
} from "./atom";
import { SCORE_SELECTOR_KEY } from "./key";
import { selector } from "recoil";
import { calculate } from "../components/logics/ScoreCalculator";

export const scoreSelector = selector({
  key: SCORE_SELECTOR_KEY,
  get: ({ get }) => {
    const score = get(scoreState);
    const selectedNumbers = get(selectedNumberState);
    const currentSelectNumber = get(currentSelectNumberState);
    return score + calculate(selectedNumbers, currentSelectNumber);
  },
});
