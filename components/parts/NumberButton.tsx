import { useCallback } from "react";
import { PossibleNumber } from "../../types/type";

type Props = {
  number: PossibleNumber;
  onClick: (num: PossibleNumber) => void;
  isSelected: boolean;
};

const buildClassName = (isSelected: boolean) => {
  return `border ${
    isSelected ? "border-red-500" : "border-gray-500"
  } rounded-2xl text-gray-700 px-2 py-2 w-12 h-12 transition duration-500 ease select-none hover:bg-gray-400 focus:outline-none focus:shadow-outline`;
};

export function NumberButton({ number, onClick, isSelected }: Props) {
  const handleClick = useCallback(
    (e) => {
      const value = e.target.value;
      // 難しい
      if (value === "" || value === "0") {
        onClick(null);
      }
      onClick(Number(value) as PossibleNumber); // もうちょいきれいに書きたい
    },
    [onClick]
  );

  return (
    <button
      onClick={handleClick}
      value={number ?? ""}
      className={buildClassName(isSelected)}
    >
      {number ?? "×"}
    </button>
  );
}
