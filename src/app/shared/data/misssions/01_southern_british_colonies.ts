import { Mission } from 'app/shared/models/mission';

export const southern_british_colonies: Mission[] = [
  {
    id: '1-1',
    title: 'First Business',
    city: 'St-Augustine',
    destination: 'southern_british_colonies',
    duration: 'PT3M',
    reward: 50,
    cargo: {
      wine: 5,
    },
    totalCargo: 5,
    locked: false,
    ship: null,
  },
  {
    id: '1-2',
    title: 'The Sail Mates',
    city: 'Pensacola',
    destination: 'southern_british_colonies',
    duration: 'PT3M',
    reward: 75,
    cargo: {
      tobacco: 5,
    },
    totalCargo: 5,
    locked: false,
    ship: null,
  },
  {
    id: '1-3',
    title: 'American Dreams',
    city: 'Pensacola',
    destination: 'southern_british_colonies',
    duration: 'PT5M',
    reward: 100,
    cargo: {
      tobacco: 3,
      wine: 5,
    },
    totalCargo: 8,
    locked: false,
    ship: null,
  },
  {
    id: '1-4',
    title: 'New Horizon',
    city: 'Veracruz',
    destination: 'southern_british_colonies',
    duration: 'PT5M',
    reward: 100,
    cargo: {
      tobacco: 5,
    },
    totalCargo: 5,
    locked: false,
    ship: null,
  },
];
