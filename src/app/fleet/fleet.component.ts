import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app.state';
import { SHIP_KINDS, ShipInterface } from 'app/shared/models/ship.interface';
import { AddShip, LockShip, UnlockShip } from 'app/shared/store/fleet.actions';
import * as fromFleet from 'app/shared/store/fleet.reducer';
import 'rxjs/add/observable/never';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
})
export class FleetComponent implements OnInit {
  @ViewChild('nameInput') nameControl: ElementRef;
  ships$: Observable<ShipInterface[]>;
  shipForm: FormGroup;
  shipKinds = SHIP_KINDS;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.ships$ = this.store.select(fromFleet.getShips);
    this.initShipForm();
  }

  initShipForm() {
    this.shipForm = this.fb.group({
      name: ['', Validators.required],
      kind: ['', Validators.required],
      firePower: [null, Validators.required],
      speed: [null, Validators.required],
      cargoCapacity: [null, Validators.required],
    });

    if (this.nameControl) {
      this.nameControl.nativeElement.focus();
    }
  }

  addShip() {
    if (this.shipForm.valid) {
      const ship: ShipInterface = {
        name: this.shipForm.value.name,
        firePower: this.shipForm.value.firePower,
        speed: this.shipForm.value.speed,
        cargoCapacity: this.shipForm.value.cargoCapacity,
        kind: this.shipForm.value.kind,
        position: null,
        available: true,
      };

      this.store.dispatch(new AddShip(ship));
      this.initShipForm();
    }
  }

  toggleShipLock(ship: ShipInterface) {
    const action = ship.available ? LockShip : UnlockShip;
    this.store.dispatch(new action(ship));
  }
}
