export interface MissionInterface {
  id: string;
  title: string;
  city: string;
  destination: string;
  duration: string;
  reward: number;
  cargo: { [key: string]: number };
  totalCargo: number;
  locked: boolean;
}
