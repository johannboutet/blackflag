import { Duration } from 'moment';

export interface MissionInterface {
  id: string;
  title: string;
  city: string;
  destination: string;
  duration: Duration;
  reward: number;
  cargo: { [key: string]: number };
  total_cargo: number;
  locked: boolean;
}
