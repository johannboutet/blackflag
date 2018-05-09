import { MissionInterface } from 'app/shared/models/mission.interface';
import { ShipInterface } from 'app/shared/models/ship.interface';

export interface InProgressInterface {
  ship: ShipInterface;
  mission: MissionInterface;
}
