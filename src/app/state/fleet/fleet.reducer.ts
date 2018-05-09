import { ShipInterface } from 'app/shared/models/ship.interface';
import { AppState } from 'app/state/app.state';
import { FleetActions, FleetActionTypes } from 'app/state/fleet/fleet.actions';
import { fleetInitialState, FleetState } from 'app/state/fleet/fleet.state';
import { cloneDeep } from 'lodash';
import { createSelector } from 'reselect';

export function fleetReducer(state: FleetState = fleetInitialState, action: FleetActions): FleetState {
  switch (action.type) {
    case FleetActionTypes.SET_SHIPS: {
      return {
        ...state,
        ships: action.payload,
      };
    }

    case FleetActionTypes.ADD_SHIP: {
      const ship: ShipInterface = action.payload as ShipInterface;
      ship.position = state.ships.length + 1;

      return {
        ...state,
        ships: [...state.ships, action.payload],
      };
    }

    case FleetActionTypes.REMOVE_SHIP: {
      const ships = cloneDeep(state.ships);
      const newShips = ships.filter(ship => ship.position !== action.payload).map((s) => {
        const ship: ShipInterface = Object.assign({}, s);

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

    case FleetActionTypes.LOCK_SHIP: {
      const ships = cloneDeep(state.ships);
      const shipIndex = ships.findIndex(s => s.position === action.payload.position);
      ships[shipIndex].available = false;

      return {
        ...state,
        ships: ships,
      };
    }

    case FleetActionTypes.UNLOCK_SHIP: {
      const ships = cloneDeep(state.ships);
      const shipIndex = ships.findIndex(s => s.position === action.payload.position);
      ships[shipIndex].available = true;

      return {
        ...state,
        ships: ships,
      };
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
