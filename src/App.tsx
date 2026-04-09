import { useCallback, useMemo, useState } from 'react';
import { FilterPanel } from './components/FilterPanel';
import { TopBar } from './components/TopBar';
import { MapView } from './components/MapView';
import { factions } from './data/factions';
import { links } from './data/links';
import { nodes } from './data/nodes';
import { regions } from './data/regions';
import type { LinkData, OverlayMode } from './types/map';
import { DetailsPanel } from './components/DetailsPanel';
import { LegendPanel } from './components/LegendPanel';

const allRouteTypes = new Set<LinkData['type']>(['trade', 'military', 'political', 'hidden', 'pirate', 'pilgrimage']);

function App() {
  const [overlayMode, setOverlayMode] = useState<OverlayMode>('political');
  const [search, setSearch] = useState('');
  const [labelsVisible, setLabelsVisible] = useState(true);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [activeFactions, setActiveFactions] = useState(new Set(factions.map((f) => f.id)));
  const [activeRouteTypes, setActiveRouteTypes] = useState(new Set(allRouteTypes));
  const [highlightedFaction, setHighlightedFaction] = useState<string | null>(null);
  const [resetView, setResetView] = useState<() => void>(() => () => undefined);

  const handleResetViewReady = useCallback((resetFn: () => void) => {
    setResetView(() => resetFn);
  }, []);

  const query = search.trim().toLowerCase();
  const filteredFactions = useMemo(() => {
    if (!query) return factions;
    return factions.filter((f) => f.name.toLowerCase().includes(query) || f.shortName.toLowerCase().includes(query));
  }, [query]);

  const filteredNodeIds = useMemo(() => {
    if (!query) return new Set(nodes.map((n) => n.id));
    const factionMatches = new Set(filteredFactions.map((f) => f.id));
    return new Set(
      nodes
        .filter((n) => n.name.toLowerCase().includes(query) || n.tags.some((tag) => tag.toLowerCase().includes(query)) || factionMatches.has(n.factionId))
        .map((n) => n.id),
    );
  }, [query, filteredFactions]);

  const visibleNodes = nodes.filter((n) => filteredNodeIds.has(n.id));
  const selectedNode = nodes.find((n) => n.id === selectedNodeId) ?? null;

  const toggleFaction = (factionId: string) => {
    setActiveFactions((prev) => {
      const next = new Set(prev);
      if (next.has(factionId)) next.delete(factionId);
      else next.add(factionId);
      return next;
    });
  };

  const toggleRouteType = (routeType: LinkData['type']) => {
    setActiveRouteTypes((prev) => {
      const next = new Set(prev);
      if (next.has(routeType)) next.delete(routeType);
      else next.add(routeType);
      return next;
    });
  };

  return (
    <div className="app">
      <TopBar
        mode={overlayMode}
        onModeChange={setOverlayMode}
        search={search}
        onSearchChange={setSearch}
        labelsVisible={labelsVisible}
        onToggleLabels={() => setLabelsVisible((prev) => !prev)}
        onResetView={resetView}
      />
      <main className="layout">
        <FilterPanel
          factions={factions}
          activeFactions={activeFactions}
          routeTypes={allRouteTypes}
          activeRouteTypes={activeRouteTypes}
          highlightedFaction={highlightedFaction}
          onToggleFaction={toggleFaction}
          onToggleRouteType={toggleRouteType}
          onClearFactionFilters={() => setActiveFactions(new Set(factions.map((f) => f.id)))}
          onClearRouteFilters={() => setActiveRouteTypes(new Set(allRouteTypes))}
          onHighlightFaction={setHighlightedFaction}
        />
        <MapView
          regions={regions}
          nodes={visibleNodes}
          links={links}
          factions={factions}
          overlayMode={overlayMode}
          activeFactions={activeFactions}
          activeRouteTypes={activeRouteTypes}
          highlightedFaction={highlightedFaction}
          labelsVisible={labelsVisible}
          selectedNodeId={selectedNodeId}
          onSelectNode={setSelectedNodeId}
          onResetViewReady={handleResetViewReady}
        />
        <div className="right-column">
          <LegendPanel />
          <DetailsPanel
            node={selectedNode}
            faction={factions.find((f) => f.id === selectedNode?.factionId)}
            region={regions.find((r) => r.id === selectedNode?.regionId)}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
