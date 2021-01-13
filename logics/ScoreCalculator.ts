import type { PossibleNumber } from "../types/type";
import { assertNotNull } from "../utils/util";

export function calculate(
  selectedNumbers: [PossibleNumber, PossibleNumber, PossibleNumber],
  currentSelectNumbers: [PossibleNumber, PossibleNumber]
): number {
  const numberKind = new Set(
    [...selectedNumbers, ...currentSelectNumbers].filter(assertNotNull)
  );
  // 最大3種類の数字までなのでこの条件の場合は駄目(0を返すのはバッドプラクティス感)
  if (numberKind.size > 3) {
    return 0;
  }
  const tempSelected = [...selectedNumbers];
  let score = 0;
  currentSelectNumbers.forEach((number) => {
    if (number !== null) {
      if (tempSelected.includes(number)) {
        score += scoreTable[number] / 2;
      } else {
        tempSelected.push(number);
        score += scoreTable[number];
      }
    }
  });
  return score;
}

export function calcBonusScore(
  arg: [PossibleNumber, PossibleNumber, PossibleNumber]
): number {
  const filtered = [...arg].filter(assertNotNull);
  if (filtered.length !== 3) {
    return 0;
  }
  let score = 0;
  if (filtered.every((value) => value % 2 === 0)) {
    score -= 2;
  }
  if (filtered.every((value) => value % 2 === 1)) {
    score += 2;
  }
  if (filtered.every((value) => value < 8)) {
    score += 4;
  }
  if (filtered.every((value) => value > 6)) {
    score += 4;
  }
  return score;
}

const scoreTable = {
  2: 12,
  3: 10,
  4: 8,
  5: 6,
  6: 4,
  7: 2,
  8: 4,
  9: 6,
  10: 8,
  11: 10,
  12: 12,
  0: 0, // null
};
