import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DestinationInterface } from 'app/shared/models/destination.interface';
import { DestinationMissionInterface } from 'app/shared/models/destination_mission.interface';
import { MissionInterface } from 'app/shared/models/mission.interface';
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
  destinations$: Observable<DestinationMissionInterface[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    const destinations$: Observable<DestinationInterface[]> = this.store.select(getDestinations);
    const missions$: Observable<MissionInterface[]> = this.store.select(getMissions);

    this.destinations$ = combineLatest(destinations$, missions$, (destinations, missions) => {
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
    const destAction = locked ? LockDestination : UnlockDestination;
    const missionAction = locked ? LockMission : UnlockMission;

    this.store.dispatch(new destAction(destination.id));

    for (const mission of destination.missions) {
      this.store.dispatch(new missionAction(mission.id));
    }
  }

  toggleMission(mission: MissionInterface) {
    const action: MissionsActions = mission.locked ? new UnlockMission(mission.id) : new LockMission(mission.id);
    this.store.dispatch(action);
  }

  trackByDest(index: number, dest: DestinationInterface): string {
    if (dest) {
      return dest.id;
    }
  }

  trackById(index: number, mission: MissionInterface): string {
    if (mission) {
      return mission.id;
    }
  }
}
