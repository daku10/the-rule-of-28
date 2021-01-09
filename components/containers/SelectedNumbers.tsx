import { useRecoilValue } from "recoil";
import { selectedNumberState } from "../../recoil/atom";
import { Display } from "../parts/Display";

export function SelectedNumbers() {
  const selectedNumbers = useRecoilValue(selectedNumberState);

  return (
    <div style={{ display: "flex" }}>
      <Display text={selectedNumbers[0] ?? "x"} />
      <Display text={selectedNumbers[1] ?? "x"} />
      <Display text={selectedNumbers[2] ?? "x"} />
    </div>
  );
}
