import { NumberButtonRows } from "../parts/NumberButtonRow";
import { useRecoilValue } from "recoil";
import { currentSelectNumberState } from "../../recoil/atom";

export function NumberSelector() {
  const value = useRecoilValue(currentSelectNumberState);
  return (
    <>
      <NumberButtonRows currentNumber={value[0]} onClick={() => {}} />
      <NumberButtonRows currentNumber={value[1]} onClick={() => {}} />
    </>
  );
}
