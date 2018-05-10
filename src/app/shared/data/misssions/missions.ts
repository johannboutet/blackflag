import { southern_british_colonies } from 'app/shared/data/misssions/01_southern_british_colonies';
import { gulf_mexico } from 'app/shared/data/misssions/02_gulf_mexico';
import { south_atlantic } from 'app/shared/data/misssions/03_south_atlantic';
import { Mission } from 'app/shared/models/mission';

export const allMissions: Mission[] = [
  ...southern_british_colonies,
  ...gulf_mexico,
  ...south_atlantic,
];
