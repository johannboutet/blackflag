import { InProgressInterface } from 'app/shared/models/in-progress.interface';
import { AppState } from 'app/state/app.state';
import { InProgressActions, InProgressActionTypes } from 'app/state/in-progress/in-progress.actions';
import { inProgressInitialState, InProgressState } from 'app/state/in-progress/in-progress.state';
import { cloneDeep } from 'lodash';
import { createSelector } from 'reselect';

export function inProgressReducer(state: InProgressState = inProgressInitialState, action: InProgressActions): InProgressState {
  switch (action.type) {
    case InProgressActionTypes.START_MISSION: {
      return {
        ...state,
        entities: [...state.entities, cloneDeep(action.payload)],
      };
    }

    case InProgressActionTypes.STOP_MISSION: {
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
const getInProgressState = (state: AppState): InProgressState => state.inProgress;
const getInProgressEntities = (state: InProgressState): InProgressInterface[] => state.entities;

export const getInProgressMissions = createSelector(getInProgressState, getInProgressEntities);
