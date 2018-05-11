import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AvailableMission } from 'app/shared/models/available-mission';
import { Mission } from 'app/shared/models/mission';
import { Ship } from 'app/shared/models/ship';
import { AppState } from 'app/state/app.state';
import { RecallShip, SendShip } from 'app/state/fleet/fleet.actions';
import { getAvailableShips } from 'app/state/fleet/fleet.reducer';
import { StartMission, StopMission } from 'app/state/missions/missions.actions';
import { getAvailableMissions, getOngoingMissions } from 'app/state/missions/missions.reducer';
import { cloneDeep } from 'lodash';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  availableMissions$: Observable<AvailableMission[]>;
  ongoingMissions$: Observable<Mission[]>;

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
    const missions$: Observable<Mission[]> = this.store.select(getAvailableMissions);
    const ships$: Observable<Ship[]> = this.store.select(getAvailableShips);

    this.availableMissions$ = combineLatest(missions$, ships$, this.findBestCombination);
    this.ongoingMissions$ = this.store.select(getOngoingMissions);
  }

  findBestCombination(missions: Mission[], ships: Ship[]): AvailableMission[] {
    const availableMissions: AvailableMission[] = [];
    const availableShips = cloneDeep(ships);

    missions = missions.sort(DashboardComponent.sortMissions);

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

    this.store.dispatch(new SendShip({ ship, mission }));
    this.store.dispatch(new StartMission({ mission, ship }));
  }

  stopMission(mission: Mission) {
    this.store.dispatch(new RecallShip(mission.ship));
    this.store.dispatch(new StopMission(mission));
  }
}
