import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvailableMission } from 'app/shared/models/available-mission';
import { SHIP_KINDS } from 'app/shared/models/ship';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-available-missions',
  templateUrl: './available-missions.component.html',
  styleUrls: ['./available-missions.component.scss'],
})
export class AvailableMissionsComponent {
  @Input() availableMissions$: Observable<AvailableMission[]>;
  @Output() startMission: EventEmitter<AvailableMission> = new EventEmitter<AvailableMission>();

  constructor() {
  }

  getShipName(kind: string): string {
    return SHIP_KINDS.find(k => k.value === kind).name;
  }

  trackByAvailableMissionId = (index: number, availableMission: AvailableMission): string => {
    return availableMission.mission.id;
  }
}
