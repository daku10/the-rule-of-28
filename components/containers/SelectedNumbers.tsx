import { useRecoilValue } from "recoil";
import { selectedNumberState } from "../../recoil/atom";
import { Display } from "../parts/Display";

export function SelectedNumbers() {
  const selectedNumbers = useRecoilValue(selectedNumberState);

  return (
    <div className="flex space-x-4">
      <Display text={selectedNumbers[0] ?? "×"} size="Medium" color="Gray" />
      <Display text={selectedNumbers[1] ?? "×"} size="Medium" color="Gray" />
      <Display text={selectedNumbers[2] ?? "×"} size="Medium" color="Gray" />
    </div>
  );
}
