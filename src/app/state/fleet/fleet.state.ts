import { Ship } from 'app/shared/models/ship';

export interface FleetState {
  ships: Ship[];
}

export const fleetInitialState: FleetState = {
  ships: [
    {
      name: 'HMS Fortune',
      speed: 50,
      cargoCapacity: 30,
      firePower: 90,
      kind: 'brig',
      mission: null,
      position: 2,
    },
    {
      name: 'HMS Despair',
      speed: 90,
      cargoCapacity: 45,
      firePower: 50,
      kind: 'brig',
      mission: null,
      position: 3,
    },
    {
      name: 'HMS Rebel',
      speed: 20,
      cargoCapacity: 15,
      firePower: 5,
      kind: 'schooner',
      mission: null,
      position: 4,
    },
    {
      name: 'HMS Champion',
      speed: 90,
      cargoCapacity: 90,
      firePower: 90,
      kind: 'manowar',
      mission: null,
      position: 5,
    },
    {
      name: 'HMS Interceptor',
      speed: 90,
      cargoCapacity: 40,
      firePower: 50,
      kind: 'brig',
      mission: null,
      position: 6,
    },
    {
      name: 'HMS Poseidon',
      speed: 90,
      cargoCapacity: 90,
      firePower: 90,
      kind: 'manowar',
      mission: null,
      position: 7,
    },
    {
      name: 'HMS Princess',
      speed: 45,
      cargoCapacity: 50,
      firePower: 75,
      kind: 'frigate',
      mission: null,
      position: 8,
    },
    {
      name: 'HMS Pride',
      speed: 25,
      cargoCapacity: 20,
      firePower: 10,
      kind: 'schooner',
      mission: null,
      position: 9,
    },
    {
      name: 'HMS Punisher',
      speed: 50,
      cargoCapacity: 50,
      firePower: 80,
      kind: 'frigate',
      mission: null,
      position: 10,
    },
  ],
};
