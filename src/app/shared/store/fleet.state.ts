import { ShipInterface } from 'app/shared/models/ship.interface';

export interface FleetState {
  ships: ShipInterface[];
}

export const fleetInitialState: FleetState = {
  ships: [
    {
      name: 'HMS Fortune',
      speed: 50,
      cargoCapacity: 30,
      firePower: 90,
      kind: 'brig',
      available: true,
      position: 2,
    },
    {
      name: 'HMS Despair',
      speed: 90,
      cargoCapacity: 45,
      firePower: 50,
      kind: 'brig',
      available: false,
      position: 3,
    },
    {
      name: 'HMS Rebel',
      speed: 20,
      cargoCapacity: 15,
      firePower: 5,
      kind: 'schooner',
      available: false,
      position: 4,
    },
    {
      name: 'HMS Champion',
      speed: 90,
      cargoCapacity: 90,
      firePower: 90,
      kind: 'manowar',
      available: true,
      position: 5,
    },
    {
      name: 'HMS Interceptor',
      speed: 90,
      cargoCapacity: 40,
      firePower: 50,
      kind: 'brig',
      available: true,
      position: 6,
    },
    {
      name: 'HMS Poseidon',
      speed: 90,
      cargoCapacity: 90,
      firePower: 90,
      kind: 'manowar',
      available: true,
      position: 7,
    },
    {
      name: 'HMS Princess',
      speed: 45,
      cargoCapacity: 50,
      firePower: 75,
      kind: 'frigate',
      available: false,
      position: 8,
    },
    {
      name: 'HMS Pride',
      speed: 25,
      cargoCapacity: 20,
      firePower: 10,
      kind: 'schooner',
      available: true,
      position: 9,
    },
    {
      name: 'HMS Punisher',
      speed: 50,
      cargoCapacity: 50,
      firePower: 80,
      kind: 'frigate',
      available: true,
      position: 10,
    },
  ],
};