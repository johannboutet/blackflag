import { Action } from '@ngrx/store';

export enum MissionsActionTypes {
  LOCK_MISSION = '[Missions] Lock a mission',
  UNLOCK_MISSION = '[Missions] Unlock a mission',
}

export class LockMission implements Action {
  readonly type = MissionsActionTypes.LOCK_MISSION;

  constructor(public payload: string) {}
}

export class UnlockMission implements Action {
  readonly type = MissionsActionTypes.UNLOCK_MISSION;

  constructor(public payload: string) {}
}

export type MissionsActions = LockMission | UnlockMission;
