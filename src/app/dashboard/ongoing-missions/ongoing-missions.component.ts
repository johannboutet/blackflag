import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mission } from 'app/shared/models/mission';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ongoing-missions',
  templateUrl: './ongoing-missions.component.html',
  styleUrls: ['./ongoing-missions.component.scss'],
})
export class OngoingMissionsComponent {
  @Input() missions$: Observable<Mission[]>;
  @Output() stopMission: EventEmitter<Mission> = new EventEmitter<Mission>();

  constructor() { }

  trackByMissionId = (index: number, mission: Mission): string => {
    return mission.id;
  }
}
