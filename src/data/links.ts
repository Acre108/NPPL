import type { LinkData } from '../types/map';

export const links: LinkData[] = [
  { id: 'unel-cislunar-1', sourceId: 'geneva', targetId: 'luna-bastion', type: 'political', factionId: 'unel', visibility: 'public', strength: 5, summary: 'Treaty enforcement corridor between diplomatic core and cislunar bastion.' },
  { id: 'unel-cislunar-2', sourceId: 'luna-bastion', targetId: 'eosa', type: 'political', factionId: 'unel', visibility: 'public', strength: 4, summary: 'Orbital stability governance lane under continuous UNEL patrol.' },
  { id: 'earth-power-loop', sourceId: 'washington', targetId: 'strasbourg', type: 'trade', factionId: 'tau', visibility: 'public', strength: 2, summary: 'Earth bloc treaty-commerce exchange path.' },
  { id: 'earth-power-loop-2', sourceId: 'strasbourg', targetId: 'beijing', type: 'trade', factionId: 'china', visibility: 'public', strength: 2, summary: 'Economic coordination artery linking terrestrial power centres.' },

  { id: 'earth-mars-strategy-1', sourceId: 'washington', targetId: 'interzone-spindle', type: 'military', factionId: 'usa', visibility: 'contested', strength: 4, summary: 'Escort-heavy strategic lane projecting Earth power toward Mars.' },
  { id: 'earth-mars-strategy-2', sourceId: 'beijing', targetId: 'ares-ladder', type: 'military', factionId: 'china', visibility: 'contested', strength: 3, summary: 'Sino convoy-security corridor into interplanetary transit space.' },
  { id: 'earth-mars-governance', sourceId: 'interzone-spindle', targetId: 'astraeus', type: 'political', factionId: 'unel', visibility: 'contested', strength: 3, summary: 'Disputed oversight route where UNEL arbitration meets Martian sovereignty claims.' },
  { id: 'interzone-cps', sourceId: 'ares-ladder', targetId: 'ledger', type: 'trade', factionId: 'cps', visibility: 'public', strength: 4, summary: 'Insured convoy pipeline into Belt market hubs.' },

  { id: 'mrd-core-1', sourceId: 'astraeus', targetId: 'south-mare', type: 'political', factionId: 'mrd', visibility: 'public', strength: 5, summary: 'Core Martian command and extraction artery.' },
  { id: 'mrd-core-2', sourceId: 'astraeus', targetId: 'deimos', type: 'military', factionId: 'mrd', visibility: 'public', strength: 4, summary: 'Directorate orbital defence route.' },
  { id: 'mars-divide-1', sourceId: 'astraeus', targetId: 'new-philly', type: 'military', factionId: 'mrd', visibility: 'contested', strength: 4, summary: 'Hot strategic pressure line across Mars political divide.' },
  { id: 'mars-divide-2', sourceId: 'new-philly', targetId: 'charter-yards', type: 'political', factionId: 'constitutionalists', visibility: 'contested', strength: 3, summary: 'Counterweight constitutional support corridor.' },
  { id: 'mars-divide-3', sourceId: 'new-philly', targetId: 'arsia-array', type: 'political', factionId: 'constitutionalists', visibility: 'public', strength: 3, summary: 'Civil alliance route linking constitutional habitats.' },
  { id: 'colony-hidden-1', sourceId: 'colony-bastion', targetId: 'helion', type: 'hidden', factionId: 'colony-one', visibility: 'black', strength: 3, summary: 'Encrypted remnant movement lane inferred from intermittent telemetry.' },
  { id: 'colony-hidden-2', sourceId: 'helion', targetId: 'janus-quiet', type: 'pirate', factionId: 'colony-one', visibility: 'rumoured', strength: 2, summary: 'Rumoured insurgent crossing toward fringe logistics nodes.' },

  { id: 'belt-web-1', sourceId: 'ledger', targetId: 'fortunes-anchorage', type: 'trade', factionId: 'cps', visibility: 'public', strength: 5, summary: 'Primary CPS trade backbone through core Belt markets.' },
  { id: 'belt-web-2', sourceId: 'fortunes-anchorage', targetId: 'juno-bazaar', type: 'trade', factionId: 'cps', visibility: 'public', strength: 4, summary: 'Heavy freight channel linking convoy hubs and extraction bazaars.' },
  { id: 'belt-web-3', sourceId: 'juno-bazaar', targetId: 'skycut', type: 'trade', factionId: 'tau', visibility: 'public', strength: 3, summary: 'Insurance and commodity balancing lane between rival brokers.' },
  { id: 'belt-web-4', sourceId: 'skycut', targetId: 'l4-drift', type: 'trade', factionId: 'usa', visibility: 'contested', strength: 2, summary: 'Legal-commercial corridor often disrupted by seizures and claims.' },
  { id: 'belt-web-5', sourceId: 'l4-drift', targetId: 'vesta', type: 'trade', factionId: 'mrd', visibility: 'contested', strength: 2, summary: 'Materials intelligence and convoy transfer route.' },
  { id: 'belt-jupiter', sourceId: 'juno-bazaar', targetId: 'europa-command', type: 'military', factionId: 'ashva', visibility: 'contested', strength: 3, summary: 'Strategic flow from Belt extraction sphere into fortified Jovian corridors.' },

  { id: 'jovian-ashva-1', sourceId: 'europa-command', targetId: 'io-shieldworks', type: 'military', factionId: 'ashva', visibility: 'public', strength: 5, summary: 'Primary hard-power corridor of Ashva defensive network.' },
  { id: 'jovian-ashva-2', sourceId: 'io-shieldworks', targetId: 'red-furnace', type: 'military', factionId: 'ashva', visibility: 'public', strength: 4, summary: 'Fortified interdiction and rapid response lane.' },
  { id: 'jovian-ashva-3', sourceId: 'europa-command', targetId: 'gate-ring', type: 'military', factionId: 'ashva', visibility: 'public', strength: 4, summary: 'Checkpoint route enforcing Jovian ingress discipline.' },
  { id: 'jovian-ashva-4', sourceId: 'europa-command', targetId: 'ice-vault', type: 'political', factionId: 'ashva', visibility: 'public', strength: 2, summary: 'Command oversight and reserve security link.' },
  { id: 'jovian-umoja-1', sourceId: 'umoja-assembly', targetId: 'reservoir', type: 'trade', factionId: 'umoja', visibility: 'public', strength: 4, summary: 'Core food-water logistics artery for cooperative habitats.' },
  { id: 'jovian-umoja-2', sourceId: 'reservoir', targetId: 'sunline', type: 'trade', factionId: 'umoja', visibility: 'public', strength: 3, summary: 'Biotech supply channel feeding agricultural production loops.' },
  { id: 'jovian-umoja-3', sourceId: 'sunline', targetId: 'callisto-seed', type: 'trade', factionId: 'umoja', visibility: 'public', strength: 3, summary: 'Genomic distribution route to Callisto archive systems.' },
  { id: 'jovian-umoja-4', sourceId: 'umoja-assembly', targetId: 'crop-ring', type: 'political', factionId: 'umoja', visibility: 'public', strength: 2, summary: 'Cooperative policy and logistics synchronization loop.' },
  { id: 'jovian-tension', sourceId: 'gate-ring', targetId: 'umoja-assembly', type: 'military', factionId: 'ashva', visibility: 'contested', strength: 2, summary: 'Strategic pressure corridor where deterrence meets cooperative autonomy.' },

  { id: 'saturn-crossing-1', sourceId: 'red-furnace', targetId: 'titan-crossing', type: 'trade', factionId: 'cps', visibility: 'public', strength: 2, summary: 'Fringe convoy route extending from Jovian industrial lanes.' },
  { id: 'saturn-crossing-2', sourceId: 'titan-crossing', targetId: 'rime-hollow', type: 'military', factionId: 'ashva', visibility: 'contested', strength: 2, summary: 'Indirect Ashva security extension into Saturn fringe habitats.' },
  { id: 'saturn-crossing-3', sourceId: 'titan-crossing', targetId: 'janus-quiet', type: 'trade', factionId: 'cps', visibility: 'public', strength: 3, summary: 'Opportunistic freight and salvage lane through weakly governed crossings.' },

  { id: 'communion-inward-1', sourceId: 'long-night', targetId: 'mirror-dawn', type: 'pilgrimage', factionId: 'communion', visibility: 'rumoured', strength: 3, summary: 'Ritual convoy thread connecting deep-system stations.' },
  { id: 'communion-inward-2', sourceId: 'mirror-dawn', targetId: 'ember-routes', type: 'pilgrimage', factionId: 'communion', visibility: 'rumoured', strength: 3, summary: 'Partially verified pilgrimage lane toward mapped route embers.' },
  { id: 'communion-inward-3', sourceId: 'ember-routes', targetId: 'niflheim', type: 'hidden', factionId: 'communion', visibility: 'black', strength: 2, summary: 'Ghosted movement arc into sanctuary space.' },
  { id: 'communion-inward-4', sourceId: 'niflheim', targetId: 'winter-choir', type: 'hidden', factionId: 'communion', visibility: 'black', strength: 2, summary: 'Uncertain flotilla trail inferred from weak harmonic emissions.' },
  { id: 'communion-inward-5', sourceId: 'niflheim', targetId: 'janus-quiet', type: 'pilgrimage', factionId: 'communion', visibility: 'rumoured', strength: 1, summary: 'Rare pilgrim trade crossings touching Saturn fringe markets.' },
];
