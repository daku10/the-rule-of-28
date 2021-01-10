import { NumberButtonRows } from "../parts/NumberButtonRow";
import { useRecoilState } from "recoil";
import { currentSelectNumberSelector } from "../../recoil/selector";

export function NumberSelector() {
  const [value, setValue] = useRecoilState(currentSelectNumberSelector);
  return (
    <div className="space-y-1">
      <NumberButtonRows
        currentNumber={value[0]}
        onClick={(num) => {
          setValue([num, value[1]]);
        }}
      />
      <NumberButtonRows
        currentNumber={value[1]}
        onClick={(num) => {
          setValue([value[0], num]);
        }}
      />
    </div>
  );
}
