import { useCallback } from "react";
import { PossibleNumber } from "../../types/type";

type Props = {
  number: PossibleNumber;
  onClick: (num: PossibleNumber) => void;
  isSelected: boolean;
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
      style={{ borderColor: isSelected ? "red" : "black", outline: "none" }}
    >
      {number ?? "×"}
    </button>
  );
}
