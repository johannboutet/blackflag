import { Destination } from 'app/shared/models/destination';
import { Mission } from 'app/shared/models/mission';

export interface DestinationMission extends Destination {
  readonly missions: Mission[];
}
