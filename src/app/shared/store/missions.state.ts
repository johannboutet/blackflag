import { allMissions } from 'app/shared/data/misssions/missions';
import { MissionInterface } from 'app/shared/models/mission.interface';

export interface MissionsState {
  readonly entities: MissionInterface[];
}

export const missionsInitialState: MissionsState = {
  entities: allMissions,
};
