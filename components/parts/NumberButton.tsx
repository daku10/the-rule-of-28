import { useCallback } from "react";

type Props = {
  number: number | null;
  onClick: (num: number | null) => void;
  isSelected: boolean;
};

export function NumberButton({ number, onClick, isSelected }: Props) {
  const handleClick = useCallback(
    (e) => {
      const value = e.target.value;
      if (value === "") {
        onClick(null);
      }
      onClick(Number(value));
    },
    [onClick]
  );

  return (
    <button
      onClick={handleClick}
      value={number ?? ""}
      style={{ borderColor: isSelected ? "red" : "black" }}
    >
      {number ?? "×"}
    </button>
  );
}
