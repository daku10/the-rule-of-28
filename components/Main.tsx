import { ControlPanel } from "./containers/ControlPanel";
import { SelectedNumbers } from "./containers/SelectedNumbers";
import { NumberSelector } from "./containers/NumberSelector";
import { Score } from "./containers/Score";

export function Main() {
  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <Score />
      <div className="mt-4">
        <SelectedNumbers />
      </div>
      <div className="mt-4">
        <NumberSelector />
      </div>
      <div className="mt-4">
        <ControlPanel />
      </div>
    </div>
  );
}
