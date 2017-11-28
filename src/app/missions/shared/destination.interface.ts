import { MissionInterface } from 'app/missions/shared/mission.interface';

export interface DestinationInterface {
  id: string;
  name: string;
  order: number;
  missions: MissionInterface[];
}
