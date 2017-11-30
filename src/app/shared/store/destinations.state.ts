import { destinations } from 'app/shared/data/destinations';
import { DestinationInterface } from 'app/shared/models/destination.interface';

export interface DestinationsState {
  readonly entities: DestinationInterface[];
}

export const destinationInitialState: DestinationsState = {
  entities: destinations,
};
