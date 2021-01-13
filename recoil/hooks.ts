import { useCallback, useMemo } from "react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { calculate } from "../logics/ScoreCalculator";
import type { PossibleNumber } from "../types/type";
import { assertNotNull } from "../utils/util";
import {
  currentSelectNumberState,
  scoreState,
  selectedNumberState,
} from "./atom";

export const useResetStates = () => {
  const resetScore = useResetRecoilState(scoreState);
  const resetSelectedNumber = useResetRecoilState(selectedNumberState);
  const resetCurrentSelectNumber = useResetRecoilState(
    currentSelectNumberState
  );

  const reset = useCallback(() => {
    resetScore();
    resetSelectedNumber();
    resetCurrentSelectNumber();
  }, [resetScore, resetSelectedNumber, resetCurrentSelectNumber]);

  return useMemo(() => ({ reset }), [reset]);
};

export const useProceed = () => {
  const currentSelectNumber = useRecoilValue(currentSelectNumberState);
  const [selectedNumber, setSelectedNumber] = useRecoilState(
    selectedNumberState
  );
  const setScore = useSetRecoilState(scoreState);
  const resetCurrentSelectNumber = useResetRecoilState(
    currentSelectNumberState
  );

  const proceed = () => {
    setScore((prev) => prev + calculate(selectedNumber, currentSelectNumber));
    setSelectedNumber((prev) => {
      const numKind = new Set(
        [...prev, ...currentSelectNumber].filter(assertNotNull)
      ).size;
      if (numKind > 3) {
        return prev;
      }
      const result = Array.from(
        new Set([...prev, ...currentSelectNumber].filter(assertNotNull))
      );
      result.sort((a, b) => a - b);
      for (let i = 0; i < 3 - result.length; i++) {
        result.push(null as any); // TODO: ツラミ
      }
      return result as [PossibleNumber, PossibleNumber, PossibleNumber]; // TODO: ツラミ
    });
    resetCurrentSelectNumber();
  };

  return useMemo(() => ({ proceed }), [proceed]);
};
