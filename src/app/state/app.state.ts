import { destinationInitialState, DestinationsState } from 'app/state/destinations/destinations.state';
import { fleetInitialState, FleetState } from 'app/state/fleet/fleet.state';
import { missionsInitialState, MissionsState } from 'app/state/missions/missions.state';

export interface AppState {
  readonly destinations: DestinationsState;
  readonly missions: MissionsState;
  readonly fleet: FleetState;
}

export const appInitialState: AppState = {
  destinations: destinationInitialState,
  missions: missionsInitialState,
  fleet: fleetInitialState,
};
