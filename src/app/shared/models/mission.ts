import { Ship } from 'app/shared/models/ship';

export interface Mission {
  id: string;
  title: string;
  city: string;
  destination: string;
  duration: string;
  reward: number;
  cargo: { [key: string]: number };
  totalCargo: number;
  locked: boolean;
  ship: Ship;
}
