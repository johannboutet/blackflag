import { ShipInterface } from 'app/shared/models/ship.interface';

export interface FleetState {
  ships: ShipInterface[];
}

export const fleetInitialState: FleetState = {
  ships: [],
};
