import { Action } from '@ngrx/store';

export const LOCK_MISSION = '[Missions] Lock a mission';
export const UNLOCK_MISSION = '[Missions] Unlock a mission';

export class LockMission implements Action {
  readonly type = LOCK_MISSION;

  constructor(public payload: string) {
  }
}

export class UnlockMission implements Action {
  readonly type = UNLOCK_MISSION;

  constructor(public payload: string) {
  }
}

export type All
  = LockMission |
  UnlockMission;
