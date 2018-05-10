import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Destination } from 'app/shared/models/destination';
import { DestinationMission } from 'app/shared/models/destination-mission';
import { Mission } from 'app/shared/models/mission';
import { AppState } from 'app/state/app.state';
import { LockDestination, UnlockDestination } from 'app/state/destinations/destinations.actions';
import { getDestinations } from 'app/state/destinations/destinations.reducer';
import { LockMission, MissionsActions, UnlockMission } from 'app/state/missions/missions.actions';
import { getMissions } from 'app/state/missions/missions.reducer';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-mission-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  destinations$: Observable<DestinationMission[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    const destinations$: Observable<Destination[]> = this.store.select(getDestinations);
    const missions$: Observable<Mission[]> = this.store.select(getMissions);

    this.destinations$ = combineLatest(destinations$, missions$, (destinations, missions) => {
      return destinations.map((destination) => {
        return {
          ...destination,
          missions: [...missions.filter(m => m.destination === destination.id)],
        };
      });
    });
  }

  toggleDestination(destination: DestinationMission) {
    const locked = !destination.locked;
    const destAction = locked ? LockDestination : UnlockDestination;
    const missionAction = locked ? LockMission : UnlockMission;

    this.store.dispatch(new destAction(destination.id));

    for (const mission of destination.missions) {
      this.store.dispatch(new missionAction(mission.id));
    }
  }

  toggleMission(mission: Mission) {
    const action: MissionsActions = mission.locked ? new UnlockMission(mission.id) : new LockMission(mission.id);
    this.store.dispatch(action);
  }

  trackByDest(index: number, dest: Destination): string {
    if (dest) {
      return dest.id;
    }
  }

  trackById(index: number, mission: Mission): string {
    if (mission) {
      return mission.id;
    }
  }
}
