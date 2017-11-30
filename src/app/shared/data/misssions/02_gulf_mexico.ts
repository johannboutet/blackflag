import { MissionInterface } from 'app/shared/models/mission.interface';
import * as moment from 'moment';

export const gulf_mexico: MissionInterface[] = [
  {
    id: '2-1',
    title: 'The General Store',
    city: 'New-Orleans',
    destination: 'gulf_mexico',
    duration: moment.duration(18, 'minutes'),
    reward: 200,
    cargo: {
      tobacco: 10,
    },
    total_cargo: 10,
    locked: false,
  },
  {
    id: '2-2',
    title: 'Diplomacy I',
    city: 'Pensacola',
    destination: 'gulf_mexico',
    duration: moment.duration(9, 'minutes'),
    reward: 150,
    cargo: {
      wine: 15,
    },
    total_cargo: 15,
    locked: false,
  },
  {
    id: '2-3',
    title: 'A Good Deed',
    city: 'Pensacola',
    destination: 'gulf_mexico',
    duration: moment.duration(9, 'minutes'),
    reward: 100,
    cargo: {
      tobacco: 5,
    },
    total_cargo: 5,
    locked: false,
  },
  {
    id: '2-4',
    title: 'Diplomacy II',
    city: 'Veracruz',
    destination: 'gulf_mexico',
    duration: moment.duration(30, 'minutes'),
    reward: 400,
    cargo: {
      wine: 20,
    },
    total_cargo: 20,
    locked: false,
  },
  {
    id: '2-5',
    title: 'Fortune\'s Flavor',
    city: 'Veracruz',
    destination: 'gulf_mexico',
    duration: moment.duration(30, 'minutes'),
    reward: 300,
    cargo: {
      tobacco: 15,
    },
    total_cargo: 15,
    locked: false,
  },
];
