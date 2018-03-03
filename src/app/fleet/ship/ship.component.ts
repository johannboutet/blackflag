import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app.state';
import { SHIP_KINDS, ShipInterface } from 'app/shared/models/ship.interface';
import { LockShip, UnlockShip } from 'app/shared/store/fleet.actions';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss'],
})
export class ShipComponent {
  @Input() ship: ShipInterface;
  shipKinds = SHIP_KINDS;

  constructor(private store: Store<AppState>) {
  }

  get shipKindName() {
    return this.shipKinds.find(k => k.value === this.ship.kind).name;
  }

  toggleShipLock() {
    const action = this.ship.available ? LockShip : UnlockShip;
    this.store.dispatch(new action(this.ship));
  }
}