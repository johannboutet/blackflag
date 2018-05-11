import { Action } from '@ngrx/store';
import { Mission } from 'app/shared/models/mission';
import { Ship } from 'app/shared/models/ship';

export const LOCK_MISSION = '[Missions] Lock a mission';
export const UNLOCK_MISSION = '[Missions] Unlock a mission';
export const START_MISSION = '[Missions] Start a mission with a ship';
export const STOP_MISSION = '[Missions] Stop a mission with a ship';

export class LockMission implements Action {
  readonly type = LOCK_MISSION;

  constructor(public payload: string) {}
}

export class UnlockMission implements Action {
  readonly type = UNLOCK_MISSION;

  constructor(public payload: string) {}
}

export class StartMission implements Action {
  readonly type = START_MISSION;

  constructor(public payload: { mission: Mission; ship: Ship; }) {}
}

export class StopMission implements Action {
  readonly type = STOP_MISSION;

  constructor(public payload: Mission) {}
}

export type MissionsActions = LockMission | UnlockMission | StartMission | StopMission;
