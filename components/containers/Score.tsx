import { useRecoilValue } from "recoil";
import { scoreState } from "../../recoil/atom";
import { Display } from "../parts/Display";

export function Score() {
  const score = useRecoilValue(scoreState);
  return <Display text={score} />;
}
