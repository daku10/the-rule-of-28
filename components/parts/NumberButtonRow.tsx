import { PossibleNumber } from "../../types/type";
import { NumberButton } from "./NumberButton";

type Props = {
  currentNumber: PossibleNumber;
  onClick: (num: PossibleNumber | null) => void;
};

export function NumberButtonRows({ currentNumber, onClick }: Props) {
  return (
    <div style={{ display: "flex" }}>
      <NumberButton
        number={2}
        onClick={onClick}
        isSelected={currentNumber === 2}
      />
      <NumberButton
        number={3}
        onClick={onClick}
        isSelected={currentNumber === 3}
      />
      <NumberButton
        number={4}
        onClick={onClick}
        isSelected={currentNumber === 4}
      />
      <NumberButton
        number={5}
        onClick={onClick}
        isSelected={currentNumber === 5}
      />
      <NumberButton
        number={6}
        onClick={onClick}
        isSelected={currentNumber === 6}
      />
      <NumberButton
        number={7}
        onClick={onClick}
        isSelected={currentNumber === 7}
      />
      <NumberButton
        number={8}
        onClick={onClick}
        isSelected={currentNumber === 8}
      />
      <NumberButton
        number={9}
        onClick={onClick}
        isSelected={currentNumber === 9}
      />
      <NumberButton
        number={10}
        onClick={onClick}
        isSelected={currentNumber === 10}
      />
      <NumberButton
        number={11}
        onClick={onClick}
        isSelected={currentNumber === 11}
      />
      <NumberButton
        number={12}
        onClick={onClick}
        isSelected={currentNumber === 12}
      />
      <NumberButton
        number={null}
        onClick={onClick}
        isSelected={currentNumber === null}
      />
    </div>
  );
}
