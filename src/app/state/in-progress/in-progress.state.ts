import { InProgressInterface } from 'app/shared/models/in-progress.interface';

export interface InProgressState {
  readonly entities: InProgressInterface[];
}

export const inProgressInitialState: InProgressState = {
  entities: [],
};
