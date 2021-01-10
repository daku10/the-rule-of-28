import { useRecoilValue } from "recoil";
import { scoreSelector } from "../../recoil/selector";
import { Display } from "../parts/Display";

export function Score() {
  const score = useRecoilValue(scoreSelector);
  return (
    <Display text={score} size="Large" color={score >= 28 ? "Red" : "Gray"} />
  );
}
