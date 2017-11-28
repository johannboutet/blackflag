import { MissionInterface } from 'app/missions/shared/mission.interface';

export const gulf_mexico: MissionInterface[] = [
  {
    id: '1-1',
    title: 'The General Store',
    city: 'New-Orleans',
    destination: 'gulf_mexico',
    duration: 18,
    reward: 200,
    cargo: {
      tobacco: 10,
    },
    total_cargo: 10,
  },
  {
    id: '1-2',
    title: 'Diplomacy I',
    city: 'Pensacola',
    destination: 'gulf_mexico',
    duration: 9,
    reward: 150,
    cargo: {
      wine: 15,
    },
    total_cargo: 15,
  },
  {
    id: '1-3',
    title: 'A Good Deed',
    city: 'Pensacola',
    destination: 'gulf_mexico',
    duration: 9,
    reward: 100,
    cargo: {
      tobacco: 5,
    },
    total_cargo: 5,
  },
  {
    id: '1-4',
    title: 'Diplomacy II',
    city: 'Veracruz',
    destination: 'gulf_mexico',
    duration: 30,
    reward: 400,
    cargo: {
      wine: 20,
    },
    total_cargo: 20,
  },
  {
    id: '1-5',
    title: 'Fortune\'s Flavor',
    city: 'Veracruz',
    destination: 'gulf_mexico',
    duration: 30,
    reward: 300,
    cargo: {
      tobacco: 15,
    },
    total_cargo: 15,
  },
];
