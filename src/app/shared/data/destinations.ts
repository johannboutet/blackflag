import { southern_british_colonies } from 'app/shared/data/misssions/01_southern_british_colonies';
import { gulf_mexico } from 'app/shared/data/misssions/02_gulf_mexico';
import { south_atlantic } from 'app/shared/data/misssions/03_south_atlantic';
import { Destination } from 'app/shared/models/destination';

export const destinations: Destination[] = [
  {
    id: 'southern_british_colonies',
    name: 'Southern British Colonies',
    order: 1,
    locked: false,
  },
  {
    id: 'gulf_mexico',
    name: 'Gulf of Mexico',
    order: 2,
    locked: false,
  },
  {
    id: 'south_atlantic',
    name: 'South Atlantic',
    order: 3,
    locked: false,
  },
];
