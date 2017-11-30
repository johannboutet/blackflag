import { AppState } from 'app/app.state';
import * as DestinationsActions from 'app/shared/store/destinations.actions';
import { destinationInitialState, DestinationsState } from 'app/shared/store/destinations.state';
import { cloneDeep } from 'lodash';
import { createSelector } from 'reselect';

type Action = DestinationsActions.All;

export function destinationsReducer(state: DestinationsState = destinationInitialState, action: Action): DestinationsState {
  switch (action.type) {
    case DestinationsActions.LOCK_DESTINATION: {
      const destinationIndex = state.entities.findIndex(d => d.id === action.payload);
      const entities = cloneDeep(state.entities);
      const destination = cloneDeep(state.entities.find(d => d.id === action.payload));

      destination.locked = true;
      entities.splice(destinationIndex, 1, destination);

      return {
        ...state,
        entities: entities,
      };
    }

    case DestinationsActions.UNLOCK_DESTINATION : {
      const destinationIndex = state.entities.findIndex(d => d.id === action.payload);
      const entities = cloneDeep(state.entities);
      const destination = cloneDeep(state.entities.find(d => d.id === action.payload));

      destination.locked = false;
      entities.splice(destinationIndex, 1, destination);

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
const getDestinationsState = (state: AppState): DestinationsState => state.destinations;
const getDestinationsEntitiesState = (state: DestinationsState) => state.entities;

export const getDestinations = createSelector(getDestinationsState, getDestinationsEntitiesState);
