import { destinations } from 'app/shared/data/destinations';
import { Destination } from 'app/shared/models/destination';

export interface DestinationsState {
  readonly entities: Destination[];
}

export const destinationInitialState: DestinationsState = {
  entities: destinations,
};
