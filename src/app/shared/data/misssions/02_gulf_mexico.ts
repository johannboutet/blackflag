import { Mission } from 'app/shared/models/mission';

export const gulf_mexico: Mission[] = [
  {
    id: '2-1',
    title: 'The General Store',
    city: 'New-Orleans',
    destination: 'gulf_mexico',
    duration: 'PT18M',
    reward: 200,
    cargo: {
      tobacco: 10,
    },
    totalCargo: 10,
    locked: false,
    ship: null,
  },
  {
    id: '2-2',
    title: 'Diplomacy I',
    city: 'Pensacola',
    destination: 'gulf_mexico',
    duration: 'PT9M',
    reward: 150,
    cargo: {
      wine: 15,
    },
    totalCargo: 15,
    locked: false,
    ship: null,
  },
  {
    id: '2-3',
    title: 'A Good Deed',
    city: 'Pensacola',
    destination: 'gulf_mexico',
    duration: 'PT9M',
    reward: 100,
    cargo: {
      tobacco: 5,
    },
    totalCargo: 5,
    locked: false,
    ship: null,
  },
  {
    id: '2-4',
    title: 'Diplomacy II',
    city: 'Veracruz',
    destination: 'gulf_mexico',
    duration: 'PT30M',
    reward: 400,
    cargo: {
      wine: 20,
    },
    totalCargo: 20,
    locked: false,
    ship: null,
  },
  {
    id: '2-5',
    title: 'Fortune\'s Flavor',
    city: 'Veracruz',
    destination: 'gulf_mexico',
    duration: 'PT30M',
    reward: 300,
    cargo: {
      tobacco: 15,
    },
    totalCargo: 15,
    locked: false,
    ship: null,
  },
];
