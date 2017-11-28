export interface MissionInterface {
  id: string;
  title: string;
  city: string;
  destination: string;
  duration: number;
  reward: number;
  cargo: { [key: string]: number };
  total_cargo: number;
}
