import type { OverlayMode } from '../types/map';
import { OVERLAY_LABELS } from '../utils/mapStyles';

interface TopBarProps {
  mode: OverlayMode;
  onModeChange: (mode: OverlayMode) => void;
  search: string;
  onSearchChange: (value: string) => void;
  labelsVisible: boolean;
  onToggleLabels: () => void;
  onResetView: () => void;
}

export function TopBar({ mode, onModeChange, search, onSearchChange, labelsVisible, onToggleLabels, onResetView }: TopBarProps) {
  return (
    <header className="top-bar">
      <div>
        <h1>No Peace Past Luna</h1>
        <p>Solar Political Transit Map · Year 2327</p>
      </div>
      <div className="controls">
        <input
          className="search"
          type="search"
          placeholder="Search nodes or factions"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <select value={mode} onChange={(event) => onModeChange(event.target.value as OverlayMode)}>
          {Object.entries(OVERLAY_LABELS).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
        <button onClick={onToggleLabels}>{labelsVisible ? 'Hide Labels' : 'Show Labels'}</button>
        <button onClick={onResetView}>Reset View</button>
      </div>
    </header>
  );
}
