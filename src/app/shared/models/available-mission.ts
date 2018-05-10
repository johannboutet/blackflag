import { Mission } from 'app/shared/models/mission';
import { Ship } from 'app/shared/models/ship';

export interface AvailableMission {
  mission: Mission;
  ship: Ship;
}
