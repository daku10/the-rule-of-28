import {
  currentSelectNumberState,
  scoreState,
  selectedNumberState,
} from "./atom";
import {
  SCORE_SELECTOR_KEY,
  CURRENT_SELECT_NUMBER_SELECTOR_KEY,
  SELECTED_NUMBER_SELECTOR_KEY,
} from "./key";
import { selector } from "recoil";
import { calcBonusScore, calculate } from "../logics/ScoreCalculator";
import { PossibleNumber } from "../types/type";
import { assertNotNull } from "../utils/util";

export const scoreSelector = selector({
  key: SCORE_SELECTOR_KEY,
  get: ({ get }) => {
    const score = get(scoreState);
    const selectedNumbers = get(selectedNumberState);
    const currentSelectNumber = get(currentSelectNumberState);
    const calcScore = calculate(selectedNumbers, currentSelectNumber);
    const target = Array.from(
      new Set(
        [...selectedNumbers, ...currentSelectNumber].filter(assertNotNull)
      )
    );
    if (target.length === 3) {
      return (
        score +
        calcScore +
        calcBonusScore(
          target as [PossibleNumber, PossibleNumber, PossibleNumber]
        )
      );
    }
    return score + calcScore;
  },
});

export const selectedNumberSelector = selector<
  [PossibleNumber, PossibleNumber, PossibleNumber]
>({
  key: SELECTED_NUMBER_SELECTOR_KEY,
  get: ({ get }) => {
    return get(selectedNumberState);
  },
  set: ({ set, get }, newValue) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const numKind = new Set(
      [...get(selectedNumberState), ...newValue].filter((v) => v !== null)
    ).size;
    if (numKind > 3) {
      return;
    }
    const prev = get(selectedNumberState);
    const result = Array.from(
      new Set([...prev, ...newValue].filter((v) => v !== null))
    ) as Array<Exclude<PossibleNumber, null>>;
    result.sort((a, b) => a - b);
    result as Array<PossibleNumber>;
    for (let i = 0; i < 3 - result.length; i++) {
      result.push(null as any); //ゴミ
    }
    set(
      selectedNumberState,
      result as [PossibleNumber, PossibleNumber, PossibleNumber] // ゴミ2
    );
  },
});

export const currentSelectNumberSelector = selector<
  [PossibleNumber, PossibleNumber]
>({
  key: CURRENT_SELECT_NUMBER_SELECTOR_KEY,
  get: ({ get }) => {
    return get(currentSelectNumberState);
  },
  set: ({ set, get }, newValue) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const numKind = new Set(
      [...get(selectedNumberState), ...newValue].filter((v) => v !== null)
    ).size;
    if (numKind > 3) {
      return;
    }
    set(currentSelectNumberState, newValue);
  },
});
