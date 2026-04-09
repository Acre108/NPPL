import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Faction, LinkData, NodeData, OverlayMode, Region } from '../types/map';
import { getLinkDasharray, getLinkStrokeWidth, isLinkVisibleInOverlay } from '../utils/mapStyles';

interface MapViewProps {
  regions: Region[];
  nodes: NodeData[];
  links: LinkData[];
  factions: Faction[];
  overlayMode: OverlayMode;
  activeFactions: Set<string>;
  activeRouteTypes: Set<LinkData['type']>;
  highlightedFaction: string | null;
  labelsVisible: boolean;
  selectedNodeId: string | null;
  onSelectNode: (nodeId: string) => void;
  onResetViewReady: (resetFn: () => void) => void;
}

const VIEWBOX = { width: 2260, height: 900 };

export function MapView(props: MapViewProps) {
  const {
    regions,
    nodes,
    links,
    factions,
    overlayMode,
    activeFactions,
    activeRouteTypes,
    highlightedFaction,
    labelsVisible,
    selectedNodeId,
    onSelectNode,
    onResetViewReady,
  } = props;

  const factionById = useMemo(() => new Map(factions.map((f) => [f.id, f])), [factions]);
  const nodeById = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);

  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [dragging, setDragging] = useState(false);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);
  const dragStart = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  const resetView = useCallback(() => setTransform({ x: 0, y: 0, scale: 1 }), []);

  useEffect(() => {
    onResetViewReady(resetView);
  }, [onResetViewReady, resetView]);

  const visibleNodes = nodes.filter((node) => activeFactions.has(node.factionId));
  const visibleNodeIds = new Set(visibleNodes.map((n) => n.id));
  const visibleLinks = links.filter((link) => (
    visibleNodeIds.has(link.sourceId)
    && visibleNodeIds.has(link.targetId)
    && activeRouteTypes.has(link.type)
    && isLinkVisibleInOverlay(link, overlayMode)
  ));

  const getOpacity = (factionId: string): number => {
    if (!highlightedFaction) return 1;
    return factionId === highlightedFaction ? 1 : 0.15;
  };

  const onWheel = (event: React.WheelEvent<SVGSVGElement>) => {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 1.1 : 0.9;
    setTransform((prev) => ({ ...prev, scale: Math.min(3.2, Math.max(0.6, prev.scale * delta)) }));
  };

  return (
    <div className="map-shell">
      {tooltip && <div className="tooltip" style={{ left: tooltip.x + 14, top: tooltip.y + 14 }}>{tooltip.text}</div>}
      <svg
        className="map-canvas"
        viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
        onWheel={onWheel}
        onMouseDown={(event) => {
          setDragging(true);
          dragStart.current = { x: event.clientX, y: event.clientY, tx: transform.x, ty: transform.y };
        }}
        onMouseMove={(event) => {
          if (dragging) {
            setTransform((prev) => ({
              ...prev,
              x: dragStart.current.tx + ((event.clientX - dragStart.current.x) / prev.scale),
              y: dragStart.current.ty + ((event.clientY - dragStart.current.y) / prev.scale),
            }));
          }
        }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => {
          setDragging(false);
          setTooltip(null);
        }}
      >
        <defs>
          <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
          {regions.map((region, index) => (
            <g key={region.id}>
              <rect
                x={region.x}
                y={40}
                width={region.width}
                height={800}
                className={`region-bg region-${index % 3}`}
                rx={16}
              />
              <text x={region.x + 20} y={78} className="region-title">{region.name}</text>
              <text x={region.x + 20} y={104} className="region-summary">{region.summary}</text>
            </g>
          ))}

          {visibleLinks.map((link) => {
            const source = nodeById.get(link.sourceId);
            const target = nodeById.get(link.targetId);
            if (!source || !target) return null;

            const faction = factionById.get(link.factionId);
            const color = faction?.color ?? '#9db5d1';
            const midX = (source.x + target.x) / 2;
            const curvature = Math.abs(source.x - target.x) > 250 ? 80 : 40;
            const d = `M ${source.x} ${source.y} Q ${midX} ${Math.min(source.y, target.y) - curvature} ${target.x} ${target.y}`;
            return (
              <path
                key={link.id}
                d={d}
                stroke={color}
                strokeWidth={getLinkStrokeWidth(link, overlayMode)}
                strokeDasharray={getLinkDasharray(link, overlayMode)}
                strokeLinecap="round"
                fill="none"
                opacity={getOpacity(link.factionId) * (overlayMode === 'hidden' ? 0.6 : 0.85)}
                className={`route-${link.type}`}
              />
            );
          })}

          {visibleNodes.map((node) => {
            const faction = factionById.get(node.factionId);
            const opacity = getOpacity(node.factionId);
            const isHiddenNode = node.importance === 'hidden' || node.type === 'hidden';
            const radius = node.importance === 'major' ? 12 : 8;
            return (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius + 8}
                  fill={faction?.color ?? '#9db5d1'}
                  opacity={overlayMode === 'hidden' || isHiddenNode ? 0.16 * opacity : 0.22 * opacity}
                  filter="url(#softGlow)"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  fill={faction?.color ?? '#9db5d1'}
                  opacity={overlayMode === 'hidden' && faction?.visibilityType !== 'recognized' ? 0.45 * opacity : 0.95 * opacity}
                  stroke={selectedNodeId === node.id ? '#f7f9ff' : '#0b1222'}
                  strokeWidth={selectedNodeId === node.id ? 3 : 1.5}
                  onClick={() => onSelectNode(node.id)}
                  onMouseMove={(event) => setTooltip({ x: event.clientX, y: event.clientY, text: `${node.name} · ${faction?.shortName ?? 'Unknown'}` })}
                  onMouseLeave={() => setTooltip(null)}
                  className="node-dot"
                />
                {labelsVisible && (
                  <text x={node.x + 14} y={node.y - 10} className={`node-label ${isHiddenNode ? 'uncertain' : ''}`}>
                    {node.name}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
