import { OngoingMission } from 'app/shared/models/ongoing.mission';

export interface OngoingState {
  readonly entities: OngoingMission[];
}

export const ongoingInitialState: OngoingState = {
  entities: [],
};
