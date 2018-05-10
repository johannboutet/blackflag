import { OngoingMission } from 'app/shared/models/ongoing.mission';
import { AppState } from 'app/state/app.state';
import { OngoingActions, OngoingActionTypes } from 'app/state/ongoing/ongoing.actions';
import { ongoingInitialState, OngoingState } from 'app/state/ongoing/ongoing.state';
import { cloneDeep } from 'lodash';
import { createSelector } from 'reselect';

export function ongoingReducer(state: OngoingState = ongoingInitialState, action: OngoingActions): OngoingState {
  switch (action.type) {
    case OngoingActionTypes.START_MISSION: {
      return {
        ...state,
        entities: [...state.entities, cloneDeep(action.payload)],
      };
    }

    case OngoingActionTypes.STOP_MISSION: {
      const missions = cloneDeep(state.entities);
      missions.splice(state.entities.indexOf(action.payload), 1);

      return {
        ...state,
        entities: missions,
      };
    }

    default: {
      return state;
    }
  }
}

/* Selectors */
const getOngoingState = (state: AppState): OngoingState => state.ongoing;
const getOngoingEntities = (state: OngoingState): OngoingMission[] => state.entities;

export const getOngoingMissions = createSelector(getOngoingState, getOngoingEntities);
