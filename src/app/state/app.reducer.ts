import { ActionReducerMap } from '@ngrx/store';
import { AppState } from 'app/state/app.state';
import { destinationsReducer } from 'app/state/destinations/destinations.reducer';
import { fleetReducer } from 'app/state/fleet/fleet.reducer';
import { inProgressReducer } from 'app/state/in-progress/in-progress.reducer';
import { missionsReducer } from 'app/state/missions/missions.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  destinations: destinationsReducer,
  missions: missionsReducer,
  fleet: fleetReducer,
  inProgress: inProgressReducer,
};
