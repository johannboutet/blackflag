import { allMissions } from 'app/shared/data/misssions/missions';
import { Mission } from 'app/shared/models/mission';

export interface MissionsState {
  readonly entities: Mission[];
}

export const missionsInitialState: MissionsState = {
  entities: allMissions,
};
