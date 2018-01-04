import { DestinationInterface } from 'app/shared/models/destination.interface';
import { MissionInterface } from 'app/shared/models/mission.interface';

export interface DestinationMissionInterface extends DestinationInterface {
  readonly missions: MissionInterface[];
}
