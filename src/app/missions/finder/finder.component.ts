import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app.state';
import { MissionInterface } from 'app/shared/models/mission.interface';
import { ShipInterface } from 'app/shared/models/ship.interface';
import { getShips } from 'app/shared/store/fleet.reducer';
import { getMissions } from 'app/shared/store/missions.reducer';
import 'rxjs/add/observable/never';
import { Observable } from 'rxjs/Observable';
import { cloneDeep } from 'lodash';

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

    this.availableMissions$ = Observable.combineLatest(missions$, ships$, this.findBestCombination);
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

        availableShips.splice(availableShips.findIndex(s => s === bestShip), 1);
      }
    }

    return availableMissions;
  }
}
