import { Action } from '@ngrx/store';
import { ShipInterface } from 'app/shared/models/ship.interface';

export const SET_SHIPS = '[Fleet] Set ships';
export const ADD_SHIP = '[Fleet] Add a ship';
export const REMOVE_SHIP = '[Fleet] Remove a ship';
export const LOCK_SHIP = '[Fleet] Lock a ship';
export const UNLOCK_SHIP = '[Fleet] Unlock a ship';

export class SetShips implements Action {
  readonly type = SET_SHIPS;

  constructor(public payload: ShipInterface[]) {
  }
}

export class AddShip implements Action {
  readonly type = ADD_SHIP;

  constructor(public payload: ShipInterface) {
  }
}

export class RemoveShip implements Action {
  readonly type = REMOVE_SHIP;

  constructor(public payload: number) {
  }
}

export class LockShip implements Action {
  readonly type = LOCK_SHIP;

  constructor(public payload: ShipInterface) {
  }
}

export class UnlockShip implements Action {
  readonly type = UNLOCK_SHIP;

  constructor(public payload: ShipInterface) {
  }
}

export type All
  = SetShips |
  AddShip |
  RemoveShip |
  LockShip |
  UnlockShip;
