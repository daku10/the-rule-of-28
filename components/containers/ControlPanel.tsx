import { useProceed, useResetStates } from "../../recoil/hooks";
import { Button } from "../parts/Button";

export function ControlPanel() {
  const { proceed } = useProceed();
  const { reset } = useResetStates();

  return (
    <div className="flex flex-col space-y-4">
      <Button text="proceed" type="Success" onClick={proceed} />
      <Button text="clear" type="Danger" onClick={reset} />
    </div>
  );
}
