import { Action } from '@ngrx/store';
import { MissionInterface } from 'app/shared/models/mission.interface';
import { ShipInterface } from 'app/shared/models/ship.interface';

export enum InProgressActionTypes {
  START_MISSION = '[In progress] Start a mission with a ship',
  STOP_MISSION = '[In progress] Stop a mission with a ship',
}

export class StartMission implements Action {
  readonly type = InProgressActionTypes.START_MISSION;

  constructor(public payload: { mission: MissionInterface; ship: ShipInterface; }) {}
}

export class StopMission implements Action {
  readonly type = InProgressActionTypes.STOP_MISSION;

  constructor(public payload: { mission: MissionInterface; ship: ShipInterface; }) {}
}

export type InProgressActions = StartMission | StopMission;
