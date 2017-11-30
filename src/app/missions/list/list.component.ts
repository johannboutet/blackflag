import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app.state';
import { DestinationInterface } from 'app/shared/models/destination.interface';
import { DestinationMissionInterface } from 'app/shared/models/destination_mission.interface';
import { MissionInterface } from 'app/shared/models/mission.interface';
import * as fromDestinations from 'app/shared/store/destinations.reducer';
import * as MissionsActions from 'app/shared/store/missions.actions';
import * as DestinationsActions from 'app/shared/store/destinations.actions';
import * as fromMissions from 'app/shared/store/missions.reducer';
import 'rxjs/add/observable/combineLatest';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mission-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  destinations$: Observable<DestinationMissionInterface[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    const destinations$: Observable<DestinationInterface[]> = this.store.select(fromDestinations.getDestinations);
    const missions$: Observable<MissionInterface[]> = this.store.select(fromMissions.getMissions);

    this.destinations$ = Observable.combineLatest(destinations$, missions$, (destinations, missions) => {
      return destinations.map((destination) => {
        return {
          ...destination,
          missions: [...missions.filter(m => m.destination === destination.id)],
        };
      });
    });
  }

  toggleDestination(destination: DestinationMissionInterface) {
    const locked = !destination.locked;

    if (locked) {
      this.store.dispatch(new DestinationsActions.LockDestination(destination.id));

      for (const mission of destination.missions) {
        this.store.dispatch(new MissionsActions.LockMission(mission.id));
      }
    } else {
      this.store.dispatch(new DestinationsActions.UnlockDestination(destination.id));

      for (const mission of destination.missions) {
        this.store.dispatch(new MissionsActions.UnlockMission(mission.id));
      }
    }
  }

  toggleMission(mission: MissionInterface) {
    const action: MissionsActions.All = mission.locked ? new MissionsActions.UnlockMission(mission.id) : new MissionsActions.LockMission(mission.id);
    this.store.dispatch(action);
  }
}
