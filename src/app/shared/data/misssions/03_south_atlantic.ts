import { MissionInterface } from 'app/shared/models/mission.interface';
import * as moment from 'moment';

export const south_atlantic: MissionInterface[] = [
  {
    id: '3-1',
    title: 'A Feast of Riches',
    city: 'New-Orleans',
    destination: 'south_atlantic',
    duration: moment.duration(8, 'hours'),
    reward: 1000,
    cargo: {
      rice: 5,
      wine: 10,
    },
    total_cargo: 15,
    locked: false,
  },
  {
    id: '3-2',
    title: 'Outlaws III',
    city: 'Pensacola',
    destination: 'south_atlantic',
    duration: moment.duration(8, 'hours'),
    reward: 1200,
    cargo: {
      tobacco: 20,
    },
    total_cargo: 20,
    locked: false,
  },
  {
    id: '3-3',
    title: 'Diplomacy III',
    city: 'Pensacola',
    destination: 'south_atlantic',
    duration: moment.duration(10, 'hours'),
    reward: 1300,
    cargo: {
      tobacco: 10,
    },
    total_cargo: 10,
    locked: false,
  },
  {
    id: '3-4',
    title: 'Brethren of the Coast I\n',
    city: 'Veracruz',
    destination: 'south_atlantic',
    duration: moment.duration(10, 'hours'),
    reward: 1400,
    cargo: {
      wine: 20,
    },
    total_cargo: 20,
    locked: false,
  },
  {
    id: '3-5',
    title: 'To The South',
    city: 'Veracruz',
    destination: 'south_atlantic',
    duration: moment.duration(5, 'hours'),
    reward: 800,
    cargo: {
      wine: 10,
      cocoa: 5,
    },
    total_cargo: 15,
    locked: false,
  },
  {
    id: '3-6',
    title: 'Good Works',
    city: 'Veracruz',
    destination: 'south_atlantic',
    duration: moment.duration(5, 'hours'),
    reward: 900,
    cargo: {
      rice: 25,
    },
    total_cargo: 25,
    locked: false,
  },
  {
    id: '3-7',
    title: 'The Big Smoke',
    city: 'Veracruz',
    destination: 'south_atlantic',
    duration: moment.duration(5, 'hours'),
    reward: 1000,
    cargo: {
      tobacco: 30,
    },
    total_cargo: 30,
    locked: false,
  },
];
