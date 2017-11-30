import { destinationInitialState, DestinationsState } from 'app/shared/store/destinations.state';
import { missionsInitialState, MissionsState } from 'app/shared/store/missions.state';

export interface AppState {
  readonly destinations: DestinationsState;
  readonly missions: MissionsState;
}

export const appInitialState: AppState = {
  destinations: destinationInitialState,
  missions: missionsInitialState,
};
