import { Action } from '@ngrx/store';
import { Ship } from 'app/shared/models/ship';

export enum FleetActionTypes {
  SET_SHIPS = '[Fleet] Set ships',
  ADD_SHIP = '[Fleet] Add a ship',
  REMOVE_SHIP = '[Fleet] Remove a ship',
  LOCK_SHIP = '[Fleet] Lock a ship',
  UNLOCK_SHIP = '[Fleet] Unlock a ship',
}

export class SetShips implements Action {
  readonly type = FleetActionTypes.SET_SHIPS;

  constructor(public payload: Ship[]) {}
}

export class AddShip implements Action {
  readonly type = FleetActionTypes.ADD_SHIP;

  constructor(public payload: Ship) {}
}

export class RemoveShip implements Action {
  readonly type = FleetActionTypes.REMOVE_SHIP;

  constructor(public payload: number) {}
}

export class LockShip implements Action {
  readonly type = FleetActionTypes.LOCK_SHIP;

  constructor(public payload: Ship) {}
}

export class UnlockShip implements Action {
  readonly type = FleetActionTypes.UNLOCK_SHIP;

  constructor(public payload: Ship) {}
}

export type FleetActions = SetShips | AddShip | RemoveShip | LockShip | UnlockShip;
