import { AppState } from 'app/app.state';
import * as MissionsActions from 'app/shared/store/missions.actions';
import { missionsInitialState, MissionsState } from 'app/shared/store/missions.state';
import { createSelector } from 'reselect';
import { cloneDeep } from 'lodash';

type Action = MissionsActions.All;

export function missionsReducer(state: MissionsState = missionsInitialState, action: Action): MissionsState {
  switch (action.type) {
    case MissionsActions.LOCK_MISSION: {
      const missionIndex = state.entities.findIndex(m => m.id === action.payload);
      const entities = cloneDeep(state.entities);
      const mission = cloneDeep(state.entities.find(m => m.id === action.payload));

      mission.locked = true;
      entities.splice(missionIndex, 1, mission);

      return {
        ...state,
        entities: entities,
      };
    }

    case MissionsActions.UNLOCK_MISSION : {
      const missionIndex = state.entities.findIndex(m => m.id === action.payload);
      const entities = cloneDeep(state.entities);
      const mission = cloneDeep(state.entities.find(m => m.id === action.payload));

      mission.locked = false;
      entities.splice(missionIndex, 1, mission);

      return {
        ...state,
        entities: entities,
      };
    }

    default: {
      return state;
    }
  }
}

/* Selectors */
const getMissionsState = (state: AppState): MissionsState => state.missions;
const getMissionsEntitiesState = (state: MissionsState) => state.entities;

export const getMissions = createSelector(getMissionsState, getMissionsEntitiesState);
