import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  currentSelectNumberState,
  scoreState,
  selectedNumberState,
} from "../../recoil/atom";
import {
  currentSelectNumberSelector,
  scoreSelector,
  selectedNumberSelector,
} from "../../recoil/selector";
import { PossibleNumber } from "../../types/type";
import { Button } from "../parts/Button";

export function ControlPanel() {
  const currentSelectNumber = useRecoilValue(currentSelectNumberState);
  const setSelectedNumber = useSetRecoilState(selectedNumberState);
  const currentScore = useRecoilValue(scoreSelector);
  const setScore = useSetRecoilState(scoreState);
  const resetScore = useResetRecoilState(scoreState);
  const resetSelectedNumber = useResetRecoilState(selectedNumberState);
  const resetCurrentSelectNumber = useResetRecoilState(
    currentSelectNumberState
  );

  const handleClickProceed = () => {
    setScore(currentScore);
    setSelectedNumber((prev) => {
      const numKind = new Set(
        [...prev, ...currentSelectNumber].filter((v) => v !== null)
      ).size;
      if (numKind > 3) {
        return prev;
      }
      const result = Array.from(
        new Set([...prev, ...currentSelectNumber].filter((v) => v !== null))
      ) as Array<Exclude<PossibleNumber, null>>;
      result.sort((a, b) => a - b);
      result as Array<PossibleNumber>;
      for (let i = 0; i < 3 - result.length; i++) {
        result.push(null as any); //ゴミ
      }
      return result as [PossibleNumber, PossibleNumber, PossibleNumber]; // ゴミ
    });
    resetCurrentSelectNumber();
  };
  const handleClickClear = () => {
    resetScore();
    resetSelectedNumber();
    resetCurrentSelectNumber();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button text="proceed" onClick={handleClickProceed} />
      <Button text="clear" onClick={handleClickClear} />
    </div>
  );
}
