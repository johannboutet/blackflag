import { Ship } from 'app/shared/models/ship';
import { AppState } from 'app/state/app.state';
import { ADD_SHIP, FleetActions, RECALL_SHIP, REMOVE_SHIP, SEND_SHIP, SET_SHIPS } from 'app/state/fleet/fleet.actions';
import { fleetInitialState, FleetState } from 'app/state/fleet/fleet.state';
import { cloneDeep } from 'lodash';
import { createSelector } from 'reselect';

export function fleetReducer(state: FleetState = fleetInitialState, action: FleetActions): FleetState {
  switch (action.type) {
    case SET_SHIPS: {
      return {
        ...state,
        ships: cloneDeep(action.payload),
      };
    }

    case ADD_SHIP: {
      const ship = cloneDeep(action.payload);
      ship.position = state.ships.length + 1;

      return {
        ...state,
        ships: [...state.ships, action.payload],
      };
    }

    case REMOVE_SHIP: {
      const ships = cloneDeep(state.ships);
      const newShips = ships.filter(ship => ship.position !== action.payload).map((s) => {
        const ship: Ship = Object.assign({}, s);

        if (ship.position > action.payload) {
          ship.position -= 1;
        }

        return ship;
      });

      return {
        ...state,
        ships: newShips,
      };
    }

    case SEND_SHIP: {
      const shipIndex = state.ships.findIndex(s => s.position === action.payload.ship.position);
      const ship = cloneDeep(state.ships[shipIndex]);

      ship.mission = action.payload.mission;
      state.ships.splice(shipIndex, 1, ship)

      return state;
    }

    case RECALL_SHIP: {
      const shipIndex = state.ships.findIndex(s => s.position === action.payload.position);
      const ship = cloneDeep(state.ships[shipIndex]);

      ship.mission = null;
      state.ships.splice(shipIndex, 1, ship)

      return state;
    }

    default: {
      return state;
    }
  }
}

/* Selectors */
const getFleetState = (state: AppState): FleetState => state.fleet;
const getFleetShipsState = (state: FleetState) => state.ships;

export const getShips = createSelector(getFleetState, getFleetShipsState);
export const getAvailableShips = (state: AppState): Ship[] => {
  return state.fleet.ships.filter(s => s.mission === null);
};
