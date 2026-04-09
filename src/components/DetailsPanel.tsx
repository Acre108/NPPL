import type { Faction, NodeData, Region } from '../types/map';

interface DetailsPanelProps {
  node: NodeData | null;
  faction?: Faction;
  region?: Region;
}

export function DetailsPanel({ node, faction, region }: DetailsPanelProps) {
  return (
    <aside className="panel details-panel">
      <h2>Lore Details</h2>
      {!node && <p>Select a node to inspect political and transit context.</p>}
      {node && (
        <>
          <h3>{node.name}</h3>
          <p>{node.summary}</p>
          <dl>
            <dt>Region</dt><dd>{region?.name}</dd>
            <dt>Faction</dt><dd>{faction?.name}</dd>
            <dt>Type</dt><dd>{node.type}</dd>
            <dt>Importance</dt><dd>{node.importance}</dd>
            <dt>Tags</dt><dd>{node.tags.join(', ')}</dd>
          </dl>
        </>
      )}
    </aside>
  );
}
