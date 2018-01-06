import { Component, Input } from '@angular/core';
import { SHIP_KINDS, ShipInterface } from 'app/shared/models/ship.interface';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss'],
})
export class ShipComponent {
  @Input() ship: ShipInterface;

  shipKinds = SHIP_KINDS;

  constructor() {
  }

  get shipKindName() {
    return this.shipKinds.find(k => k.value === this.ship.kind).name;
  }
}
