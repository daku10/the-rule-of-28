import { Button } from "../parts/Button";

export function ControlPanel() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button text="proceed" onClick={() => {}} />
      <Button text="clear" onClick={() => {}} />
    </div>
  );
}
