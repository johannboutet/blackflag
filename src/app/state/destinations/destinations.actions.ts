import { Action } from '@ngrx/store';

export enum DestinationsActionTypes {
  LOCK_DESTINATION = '[Destinations] Lock a destination',
  UNLOCK_DESTINATION = '[Destinations] Unlock a destination',
}

export class LockDestination implements Action {
  readonly type = DestinationsActionTypes.LOCK_DESTINATION;

  constructor(public payload: string) {}
}

export class UnlockDestination implements Action {
  readonly type = DestinationsActionTypes.UNLOCK_DESTINATION;

  constructor(public payload: string) {}
}

export type DestinationsActions = LockDestination | UnlockDestination;
