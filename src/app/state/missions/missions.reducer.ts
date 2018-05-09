import { AppState } from 'app/state/app.state';
import { MissionsActions, MissionsActionTypes } from 'app/state/missions/missions.actions';
import { missionsInitialState, MissionsState } from 'app/state/missions/missions.state';
import { cloneDeep } from 'lodash';
import { createSelector } from 'reselect';

export function missionsReducer(state: MissionsState = missionsInitialState, action: MissionsActions): MissionsState {
  switch (action.type) {
    case MissionsActionTypes.LOCK_MISSION: {
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

    case MissionsActionTypes.UNLOCK_MISSION: {
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
