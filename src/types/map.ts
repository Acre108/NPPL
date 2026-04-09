export type FactionVisibilityType =
  | 'recognized'
  | 'hidden'
  | 'roaming'
  | 'fragmented';

export interface Faction {
  id: string;
  name: string;
  shortName: string;
  category: string;
  color: string;
  textColor: string;
  description: string;
  ideologyTags: string[];
  visibilityType: FactionVisibilityType;
  homeRegion: string;
}

export type NodeType =
  | 'planet'
  | 'moon'
  | 'station'
  | 'corridor'
  | 'settlement'
  | 'hidden'
  | 'bastion'
  | 'mobile';

export type NodeImportance = 'major' | 'minor' | 'hidden';

export interface NodeData {
  id: string;
  name: string;
  regionId: string;
  factionId: string;
  type: NodeType;
  x: number;
  y: number;
  importance: NodeImportance;
  summary: string;
  tags: string[];
}

export type LinkType =
  | 'trade'
  | 'military'
  | 'political'
  | 'hidden'
  | 'pirate'
  | 'pilgrimage';

export type LinkVisibility = 'public' | 'contested' | 'rumoured' | 'black';

export interface LinkData {
  id: string;
  sourceId: string;
  targetId: string;
  type: LinkType;
  factionId: string;
  visibility: LinkVisibility;
  strength: 1 | 2 | 3 | 4 | 5;
  summary: string;
}

export interface Region {
  id: string;
  name: string;
  x: number;
  width: number;
  summary: string;
}

export type OverlayMode =
  | 'political'
  | 'trade'
  | 'military'
  | 'hidden';
