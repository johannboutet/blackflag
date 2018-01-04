export interface ShipInterface {
  position: number;
  name: string;
  kind: string;
  firePower: number;
  speed: number;
  cargoCapacity: number;
  available: boolean;
}

export const SHIP_KINDS = [
  {
    value: 'schooner',
    name: 'Schooner',
  },
  {
    value: 'brig',
    name: 'Brig',
  },
  {
    value: 'frigate',
    name: 'Frigate',
  },
  {
    value: 'manowar',
    name: 'Man O\' War',
  },
];
