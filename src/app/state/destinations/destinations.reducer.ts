import { AppState } from 'app/state/app.state';
import { DestinationsActions, DestinationsActionTypes } from 'app/state/destinations/destinations.actions';
import { destinationInitialState, DestinationsState } from 'app/state/destinations/destinations.state';
import { cloneDeep } from 'lodash';
import { createSelector } from 'reselect';

export function destinationsReducer(state: DestinationsState = destinationInitialState, action: DestinationsActions): DestinationsState {
  switch (action.type) {
    case DestinationsActionTypes.LOCK_DESTINATION: {
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

    case DestinationsActionTypes.UNLOCK_DESTINATION : {
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
