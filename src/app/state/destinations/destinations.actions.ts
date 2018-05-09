import { Action } from '@ngrx/store';

export const LOCK_DESTINATION = '[Destinations] Lock a destination';
export const UNLOCK_DESTINATION = '[Destinations] Unlock a destination';

export class LockDestination implements Action {
  readonly type = LOCK_DESTINATION;

  constructor(public payload: string) {
  }
}

export class UnlockDestination implements Action {
  readonly type = UNLOCK_DESTINATION;

  constructor(public payload: string) {
  }
}

export type All
  = LockDestination |
  UnlockDestination;
