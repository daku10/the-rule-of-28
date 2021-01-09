type Props = {
  text: string | number;
};

export function Display({ text }: Props) {
  return <div>{text}</div>;
}
