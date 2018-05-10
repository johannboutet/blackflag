import { Action } from '@ngrx/store';
import { Mission } from 'app/shared/models/mission';
import { Ship } from 'app/shared/models/ship';

export enum OngoingActionTypes {
  START_MISSION = '[In progress] Start a mission with a ship',
  STOP_MISSION = '[In progress] Stop a mission with a ship',
}

export class StartMission implements Action {
  readonly type = OngoingActionTypes.START_MISSION;

  constructor(public payload: { mission: Mission; ship: Ship; }) {}
}

export class StopMission implements Action {
  readonly type = OngoingActionTypes.STOP_MISSION;

  constructor(public payload: { mission: Mission; ship: Ship; }) {}
}

export type OngoingActions = StartMission | StopMission;
