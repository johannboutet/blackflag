import { Mission } from 'app/shared/models/mission';

export interface Ship {
  position: number;
  name: string;
  kind: string;
  firePower: number;
  speed: number;
  cargoCapacity: number;
  mission: Mission;
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
