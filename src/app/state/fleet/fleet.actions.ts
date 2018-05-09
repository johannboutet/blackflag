import { Action } from '@ngrx/store';
import { ShipInterface } from 'app/shared/models/ship.interface';

export enum FleetActionTypes {
  SET_SHIPS = '[Fleet] Set ships',
  ADD_SHIP = '[Fleet] Add a ship',
  REMOVE_SHIP = '[Fleet] Remove a ship',
  LOCK_SHIP = '[Fleet] Lock a ship',
  UNLOCK_SHIP = '[Fleet] Unlock a ship',
}

export class SetShips implements Action {
  readonly type = FleetActionTypes.SET_SHIPS;

  constructor(public payload: ShipInterface[]) {}
}

export class AddShip implements Action {
  readonly type = FleetActionTypes.ADD_SHIP;

  constructor(public payload: ShipInterface) {}
}

export class RemoveShip implements Action {
  readonly type = FleetActionTypes.REMOVE_SHIP;

  constructor(public payload: number) {}
}

export class LockShip implements Action {
  readonly type = FleetActionTypes.LOCK_SHIP;

  constructor(public payload: ShipInterface) {}
}

export class UnlockShip implements Action {
  readonly type = FleetActionTypes.UNLOCK_SHIP;

  constructor(public payload: ShipInterface) {}
}

export type FleetActions = SetShips | AddShip | RemoveShip | LockShip | UnlockShip;
