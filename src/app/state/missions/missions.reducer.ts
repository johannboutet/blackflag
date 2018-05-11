import { Mission } from 'app/shared/models/mission';
import { AppState } from 'app/state/app.state';
import { LOCK_MISSION, MissionsActions, START_MISSION, STOP_MISSION, UNLOCK_MISSION } from 'app/state/missions/missions.actions';
import { missionsInitialState, MissionsState } from 'app/state/missions/missions.state';
import { cloneDeep } from 'lodash';
import { createSelector } from 'reselect';

export function missionsReducer(state: MissionsState = missionsInitialState, action: MissionsActions): MissionsState {
  switch (action.type) {
    case LOCK_MISSION: {
      const missionIndex = state.entities.findIndex(m => m.id === action.payload);
      const mission = cloneDeep(state.entities[missionIndex]);

      mission.locked = true;
      state.entities.splice(missionIndex, 1, mission);

      return state;
    }

    case UNLOCK_MISSION: {
      const missionIndex = state.entities.findIndex(m => m.id === action.payload);
      const mission = cloneDeep(state.entities[missionIndex]);

      mission.locked = false;
      state.entities.splice(missionIndex, 1, mission)

      return state;
    }

    case START_MISSION: {
      const missionIndex = state.entities.findIndex(m => m.id === action.payload.mission.id);
      const mission = cloneDeep(state.entities[missionIndex]);

      mission.ship = cloneDeep(action.payload.ship);
      state.entities.splice(missionIndex, 1, mission);

      return state;
    }

    case STOP_MISSION: {
      const missionIndex = state.entities.findIndex(m => m.id === action.payload.id);
      const mission = cloneDeep(state.entities[missionIndex]);

      mission.ship = null;
      state.entities.splice(missionIndex, 1, mission)

      return state;
    }

    default: {
      return state;
    }
  }
}

/* Selectors */
const getMissionsState = (state: AppState): MissionsState => state.missions;
const getMissionsEntitiesState = (state: MissionsState): Mission[] => state.entities;

export const getMissions = createSelector(getMissionsState, getMissionsEntitiesState);
export const getAvailableMissions = (state: AppState): Mission[] => {
  return state.missions.entities.filter(m => !m.locked && m.ship === null);
};

export const getOngoingMissions = (state: AppState): Mission[] => {
  return state.missions.entities.filter(m => m.ship !== null);
};
