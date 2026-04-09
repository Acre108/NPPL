import type { Region } from '../types/map';

// Hand-edited region placement: x and width define horizontal political zones.
export const regions: Region[] = [
  {
    id: 'earth-luna',
    name: 'Earth / Luna',
    x: 0,
    width: 360,
    summary: 'UNEL stewardship core and cislunar order, with major Earth blocs concentrated here.',
  },
  {
    id: 'interzone',
    name: 'Earth-Mars Interzone',
    x: 360,
    width: 250,
    summary: 'Strategic and logistical transit lanes under layered influence and escort agreements.',
  },
  {
    id: 'mars',
    name: 'Mars',
    x: 610,
    width: 340,
    summary: 'Scarred, divided sphere where MRD dominance meets constitutional resistance and hidden remnant cells.',
  },
  {
    id: 'belt',
    name: 'Belt / Trojan Space',
    x: 950,
    width: 370,
    summary: 'Dense transactional web with roaming CPS primacy and constant multi-power bargaining.',
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    x: 1320,
    width: 340,
    summary: 'Fortified Jovian theatre split between Ashva route-control hard power and Umoja life-support infrastructures.',
  },
  {
    id: 'saturn',
    name: 'Saturn Fringe',
    x: 1660,
    width: 280,
    summary: 'Weakly administered fringe crossings, opportunistic routes, and sparse bastion economies.',
  },
  {
    id: 'uranus-beyond',
    name: 'Uranus and Beyond',
    x: 1940,
    width: 320,
    summary: 'Sparse, eerie deep-system sphere where Communion networks and hidden flotillas persist beyond formal maps.',
  },
];
