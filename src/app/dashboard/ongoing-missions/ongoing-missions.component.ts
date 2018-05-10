import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OngoingMission } from 'app/shared/models/ongoing.mission';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ongoing-missions',
  templateUrl: './ongoing-missions.component.html',
  styleUrls: ['./ongoing-missions.component.scss'],
})
export class OngoingMissionsComponent {
  @Input() ongoingMissions$: Observable<OngoingMission[]>;
  @Output() stopMission: EventEmitter<OngoingMission> = new EventEmitter<OngoingMission>();

  constructor() { }
}
