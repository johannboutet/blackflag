import { DestinationInterface } from 'app/missions/shared/destination.interface';
import { gulf_mexico } from 'app/missions/shared/misssions/01_gulf_mexico';
import { southern_british_colonies } from 'app/missions/shared/misssions/02_southern_british_colonies';

export const destinations: DestinationInterface[] = [
  {
    id: 'gulf_mexico',
    name: 'Gulf of Mexico',
    order: 1,
    missions: gulf_mexico,
  },
  {
    id: 'southern_british_colonies',
    name: 'Southern British Colonies',
    order: 2,
    missions: southern_british_colonies,
  },
];
