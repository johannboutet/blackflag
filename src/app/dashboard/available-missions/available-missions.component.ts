import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvailableMission } from 'app/shared/models/available-mission';
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
}
