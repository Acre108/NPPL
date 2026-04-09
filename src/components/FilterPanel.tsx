import type { Faction, LinkData } from '../types/map';
import { ROUTE_TYPE_LABELS } from '../utils/mapStyles';

interface FilterPanelProps {
  factions: Faction[];
  activeFactions: Set<string>;
  routeTypes: Set<LinkData['type']>;
  activeRouteTypes: Set<LinkData['type']>;
  highlightedFaction: string | null;
  onToggleFaction: (factionId: string) => void;
  onToggleRouteType: (routeType: LinkData['type']) => void;
  onClearFactionFilters: () => void;
  onClearRouteFilters: () => void;
  onHighlightFaction: (factionId: string | null) => void;
}

export function FilterPanel({
  factions,
  activeFactions,
  routeTypes,
  activeRouteTypes,
  highlightedFaction,
  onToggleFaction,
  onToggleRouteType,
  onClearFactionFilters,
  onClearRouteFilters,
  onHighlightFaction,
}: FilterPanelProps) {
  return (
    <aside className="panel filter-panel">
      <h2>Filters</h2>
      <section>
        <div className="panel-header-row">
          <h3>Factions</h3>
          <button onClick={onClearFactionFilters}>All</button>
        </div>
        <div className="chip-list">
          {factions.map((faction) => (
            <label key={faction.id} className={`chip ${activeFactions.has(faction.id) ? 'active' : ''}`} style={{ borderColor: faction.color }}>
              <input
                type="checkbox"
                checked={activeFactions.has(faction.id)}
                onChange={() => onToggleFaction(faction.id)}
              />
              <span>{faction.shortName}</span>
            </label>
          ))}
        </div>
      </section>
      <section>
        <div className="panel-header-row">
          <h3>Route Types</h3>
          <button onClick={onClearRouteFilters}>All</button>
        </div>
        <div className="chip-list">
          {[...routeTypes].map((type) => (
            <label key={type} className={`chip ${activeRouteTypes.has(type) ? 'active' : ''}`}>
              <input
                type="checkbox"
                checked={activeRouteTypes.has(type)}
                onChange={() => onToggleRouteType(type)}
              />
              <span>{ROUTE_TYPE_LABELS[type]}</span>
            </label>
          ))}
        </div>
      </section>
      <section>
        <h3>Highlight Faction</h3>
        <select value={highlightedFaction ?? ''} onChange={(event) => onHighlightFaction(event.target.value || null)}>
          <option value="">None</option>
          {factions.map((faction) => (
            <option key={faction.id} value={faction.id}>{faction.name}</option>
          ))}
        </select>
      </section>
    </aside>
  );
}
