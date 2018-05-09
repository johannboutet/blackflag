import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/state/app.state';
import { MissionInterface } from 'app/shared/models/mission.interface';
import { ShipInterface } from 'app/shared/models/ship.interface';
import { LockShip } from 'app/state/fleet/fleet.actions';
import { getShips } from 'app/state/fleet/fleet.reducer';
import { LockMission } from 'app/state/missions/missions.actions';
import { getMissions } from 'app/state/missions/missions.reducer';
import { cloneDeep } from 'lodash';
import { combineLatest, Observable } from 'rxjs';

interface AvailableMission {
  mission: MissionInterface;
  ship: ShipInterface;
}

@Component({
  selector: 'app-mission-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
})
export class FinderComponent implements OnInit {
  availableMissions$: Observable<AvailableMission[]>;

  static sortMissions(mission1: MissionInterface, mission2: MissionInterface): number {
    if (mission1.reward > mission2.reward) {
      return -1;
    } else if (mission1.reward < mission2.reward) {
      return 1;
    }
    return 0;
  }

  static sortShips(ship1: ShipInterface, ship2: ShipInterface) {
    if (ship1.cargoCapacity > ship2.cargoCapacity) {
      return -1;
    } else if (ship1.cargoCapacity < ship2.cargoCapacity) {
      return 1;
    }
    return 0;
  }

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    const missions$: Observable<MissionInterface[]> = this.store.select(getMissions);
    const ships$: Observable<ShipInterface[]> = this.store.select(getShips);

    this.availableMissions$ = combineLatest(missions$, ships$, this.findBestCombination);
  }

  findBestCombination(missions: MissionInterface[], ships: ShipInterface[]): AvailableMission[] {
    const availableMissions: AvailableMission[] = [];
    const availableShips = cloneDeep(ships.filter(s => s.available));

    missions = missions.filter(m => !m.locked).sort(FinderComponent.sortMissions);

    for (const mission of missions) {
      const bestShip: ShipInterface = availableShips.filter(s => s.cargoCapacity >= mission.totalCargo).sort(FinderComponent.sortShips)[0];

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

  startMission(am: AvailableMission) {
    this.store.dispatch(new LockMission(am.mission.id));
    this.store.dispatch(new LockShip(am.ship));
  }

  trackByMissionId = (index: number, am: AvailableMission): string => {
    return am.mission.id;
  }
}
