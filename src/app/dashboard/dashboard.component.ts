import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AvailableMission } from 'app/shared/models/available-mission';
import { Mission } from 'app/shared/models/mission';
import { OngoingMission } from 'app/shared/models/ongoing.mission';
import { Ship } from 'app/shared/models/ship';
import { AppState } from 'app/state/app.state';
import { LockShip, UnlockShip } from 'app/state/fleet/fleet.actions';
import { getShips } from 'app/state/fleet/fleet.reducer';
import { LockMission, UnlockMission } from 'app/state/missions/missions.actions';
import { getMissions } from 'app/state/missions/missions.reducer';
import { StartMission, StopMission } from 'app/state/ongoing/ongoing.actions';
import { getOngoingMissions } from 'app/state/ongoing/ongoing.reducer';
import { cloneDeep } from 'lodash';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  availableMissions$: Observable<AvailableMission[]>;
  ongoingMissions$: Observable<OngoingMission[]>;

  static sortMissions(mission1: Mission, mission2: Mission): number {
    if (mission1.reward > mission2.reward) {
      return -1;
    } else if (mission1.reward < mission2.reward) {
      return 1;
    }
    return 0;
  }

  static sortShips(ship1: Ship, ship2: Ship) {
    if (ship1.cargoCapacity > ship2.cargoCapacity) {
      return -1;
    } else if (ship1.cargoCapacity < ship2.cargoCapacity) {
      return 1;
    }
    return 0;
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    const missions$: Observable<Mission[]> = this.store.select(getMissions);
    const ships$: Observable<Ship[]> = this.store.select(getShips);

    this.availableMissions$ = combineLatest(missions$, ships$, this.findBestCombination);
    this.ongoingMissions$ = this.store.select(getOngoingMissions);
  }

  findBestCombination(missions: Mission[], ships: Ship[]): AvailableMission[] {
    const availableMissions: AvailableMission[] = [];
    const availableShips = cloneDeep(ships.filter(s => s.available));

    missions = missions.filter(m => !m.locked).sort(DashboardComponent.sortMissions);

    for (const mission of missions) {
      const bestShip: Ship = availableShips.filter(s => s.cargoCapacity >= mission.totalCargo).sort(DashboardComponent.sortShips)[0];

      if (bestShip) {
        availableMissions.push({
          mission: mission,
          ship: bestShip,
        });

        availableShips.splice(availableShips.indexOf(bestShip), 1);
      }
    }

    return availableMissions;
  }

  startMission(availableMission: AvailableMission) {
    const ship = availableMission.ship;
    const mission = availableMission.mission;

    this.store.dispatch(new LockMission(mission.id));
    this.store.dispatch(new LockShip(ship));
    this.store.dispatch(new StartMission({ mission, ship }));
  }

  stopMission(ongoingMission: OngoingMission) {
    const ship = ongoingMission.ship;
    const mission = ongoingMission.mission;

    this.store.dispatch(new UnlockMission(mission.id));
    this.store.dispatch(new UnlockShip(ship));
    this.store.dispatch(new StopMission({ mission, ship }));
  }

  trackByMissionId = (index: number, objWithMission: AvailableMission | OngoingMission): string => {
    return objWithMission.mission.id;
  }
}
