import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InProgressInterface } from 'app/shared/models/in-progress.interface';
import { AppState } from 'app/state/app.state';
import { UnlockShip } from 'app/state/fleet/fleet.actions';
import { StopMission } from 'app/state/in-progress/in-progress.actions';
import { getInProgressMissions } from 'app/state/in-progress/in-progress.reducer';
import { UnlockMission } from 'app/state/missions/missions.actions';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-mission-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss'],
})
export class InProgressComponent implements OnInit {
  inProgressMissions$: Observable<InProgressInterface[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.inProgressMissions$ = this.store.select(getInProgressMissions);
  }

  stopMission(ip: InProgressInterface) {
    const ship = ip.ship;
    const mission = ip.mission;

    this.store.dispatch(new UnlockMission(mission.id));
    this.store.dispatch(new UnlockShip(ship));
    this.store.dispatch(new StopMission({ mission, ship }));
  }

  trackByMissionId = (index: number, ip: InProgressInterface): string => {
    return ip.mission.id;
  }
}
