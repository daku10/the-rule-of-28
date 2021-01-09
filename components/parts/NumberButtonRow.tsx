import { NumberButton } from "./NumberButton";

export function NumberButtonRows() {
  return (
    <div style={{ display: "flex" }}>
      <NumberButton number={2} onClick={() => {}} isSelected={false} />
      <NumberButton number={3} onClick={() => {}} isSelected={false} />
      <NumberButton number={4} onClick={() => {}} isSelected={false} />
      <NumberButton number={5} onClick={() => {}} isSelected={false} />
      <NumberButton number={6} onClick={() => {}} isSelected={false} />
      <NumberButton number={7} onClick={() => {}} isSelected={false} />
      <NumberButton number={8} onClick={() => {}} isSelected={false} />
      <NumberButton number={9} onClick={() => {}} isSelected={false} />
      <NumberButton number={10} onClick={() => {}} isSelected={false} />
      <NumberButton number={11} onClick={() => {}} isSelected={false} />
      <NumberButton number={12} onClick={() => {}} isSelected={false} />
      <NumberButton number={null} onClick={() => {}} isSelected={false} />
    </div>
  );
}
