import type { LinkData, OverlayMode } from '../types/map';

export const OVERLAY_LABELS: Record<OverlayMode, string> = {
  political: 'Political Control',
  trade: 'Trade & Transit Routes',
  military: 'Military / Strategic Pressure',
  hidden: 'Hidden Activity / Rumoured Networks',
};

export const ROUTE_TYPE_LABELS: Record<LinkData['type'], string> = {
  trade: 'Trade',
  military: 'Military',
  political: 'Political',
  hidden: 'Hidden',
  pirate: 'Pirate',
  pilgrimage: 'Pilgrimage',
};

export function isLinkVisibleInOverlay(link: LinkData, mode: OverlayMode): boolean {
  if (mode === 'political') {
    return link.type === 'political' || link.type === 'military';
  }
  if (mode === 'trade') {
    return link.type === 'trade' || link.type === 'pilgrimage' || link.type === 'political';
  }
  if (mode === 'military') {
    return link.type === 'military' || link.type === 'pirate' || link.visibility === 'contested';
  }
  return link.type === 'hidden' || link.type === 'pirate' || link.type === 'pilgrimage' || link.visibility !== 'public';
}

export function getLinkStrokeWidth(link: LinkData, mode: OverlayMode): number {
  const base = link.strength * 0.6;
  if (mode === 'military') return base + 1.6;
  if (mode === 'trade') return base + 0.2;
  if (mode === 'hidden') return Math.max(1.2, base - 0.4);
  return base + 0.6;
}

export function getLinkDasharray(link: LinkData, mode: OverlayMode): string | undefined {
  if (mode === 'hidden' || link.type === 'hidden') return '4 6';
  if (link.visibility === 'contested') return '10 5';
  if (link.visibility === 'rumoured') return '2 8';
  return undefined;
}
