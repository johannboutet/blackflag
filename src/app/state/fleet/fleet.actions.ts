import { Action } from '@ngrx/store';
import { Mission } from 'app/shared/models/mission';
import { Ship } from 'app/shared/models/ship';

export const SEND_SHIP = '[Fleet] Send a ship at sea';
export const RECALL_SHIP = '[Fleet] Recall ship to dock';
export const SET_SHIPS = '[Fleet] Set ships';
export const ADD_SHIP = '[Fleet] Add a ship';
export const REMOVE_SHIP = '[Fleet] Remove a ship';

export class SetShips implements Action {
  readonly type = SET_SHIPS;

  constructor(public payload: Ship[]) {}
}

export class AddShip implements Action {
  readonly type = ADD_SHIP;

  constructor(public payload: Ship) {}
}

export class RemoveShip implements Action {
  readonly type = REMOVE_SHIP;

  constructor(public payload: number) {}
}

export class SendShip implements Action {
  readonly type = SEND_SHIP;

  constructor(public payload: { ship: Ship; mission: Mission }) {}
}

export class RecallShip implements Action {
  readonly type = RECALL_SHIP;

  constructor(public payload: Ship) {}
}

export type FleetActions = SetShips | AddShip | RemoveShip | SendShip | RecallShip;
