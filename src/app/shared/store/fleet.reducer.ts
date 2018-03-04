import { AppState } from 'app/app.state';
import { ShipInterface } from 'app/shared/models/ship.interface';
import * as FleetActions from 'app/shared/store/fleet.actions';
import { fleetInitialState, FleetState } from 'app/shared/store/fleet.state';
import { cloneDeep } from 'lodash';
import { createSelector } from 'reselect';

type Action = FleetActions.All;

export function fleetReducer(state: FleetState = fleetInitialState, action: Action): FleetState {
  switch (action.type) {
    case FleetActions.SET_SHIPS: {
      return {
        ...state,
        ships: action.payload,
      };
    }

    case FleetActions.ADD_SHIP: {
      const ship: ShipInterface = action.payload as ShipInterface;
      ship.position = state.ships.length + 1;

      return {
        ...state,
        ships: [...state.ships, action.payload],
      };
    }

    case FleetActions.REMOVE_SHIP: {
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

    case FleetActions.LOCK_SHIP: {
      const ships = cloneDeep(state.ships);
      const shipIndex = ships.findIndex(s => s.position === action.payload.position);
      ships[shipIndex].available = false;

      return {
        ...state,
        ships: ships,
      };
    }

    case FleetActions.UNLOCK_SHIP: {
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
