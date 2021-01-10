type Size = "Medium" | "Large";
type Color = "Gray" | "Red";
type Props = {
  text: string | number;
  size: Size;
  color: Color;
};

const buildClassName = (size: Size, color: Color) => {
  return `${color === "Gray" ? "text-gray-700" : "text-red-400"} ${
    size === "Medium" ? "text-base" : "text-3xl"
  }`;
};

export function Display({ text, size, color }: Props) {
  return <div className={buildClassName(size, color)}>{text}</div>;
}
