import { ControlPanel } from "./containers/ControlPanel";
import { SelectedNumbers } from "./containers/SelectedNumbers";
import { NumberSelector } from "./containers/NumberSelector";
import { Score } from "./containers/Score";

export function Main() {
  return (
    <>
      <Score />
      <SelectedNumbers />
      <NumberSelector />
      <NumberSelector />
      <ControlPanel />
    </>
  );
}
