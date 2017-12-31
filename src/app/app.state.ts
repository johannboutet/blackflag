import { destinationInitialState, DestinationsState } from 'app/shared/store/destinations.state';
import { missionsInitialState, MissionsState } from 'app/shared/store/missions.state';
import { fleetInitialState, FleetState } from 'app/shared/store/fleet.state';

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
