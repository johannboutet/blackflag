import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/state/app.state';
import { SHIP_KINDS, Ship } from 'app/shared/models/ship';
import { RemoveShip } from 'app/state/fleet/fleet.actions';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss'],
})
export class ShipComponent {
  @Input() ship: Ship;
  shipKinds = SHIP_KINDS;

  constructor(private store: Store<AppState>) {
  }

  get shipKindName() {
    return this.shipKinds.find(k => k.value === this.ship.kind).name;
  }

  deleteShip(event) {
    event.stopPropagation();
    this.store.dispatch(new RemoveShip(this.ship.position));
  }
}
