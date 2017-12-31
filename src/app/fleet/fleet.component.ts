import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app.state';
import { ShipInterface } from 'app/shared/models/ship.interface';
import { AddShip } from 'app/shared/store/fleet.actions';
import * as fromFleet from 'app/shared/store/fleet.reducer';
import 'rxjs/add/observable/never';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
})
export class FleetComponent implements OnInit {
  ships$: Observable<ShipInterface[]>;
  shipForm: FormGroup;
  shipKinds = [
    {
      value: 'schooner',
      name: 'Schooner',
    },
    {
      value: 'brig',
      name: 'Brig',
    },
    {
      value: 'frigate',
      name: 'Frigate',
    },
    {
      value: 'manowar',
      name: 'Man O\' War',
    },
  ];

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
  }

  addShip() {
    if (this.shipForm.valid) {
      const ship: ShipInterface = {
        name: this.shipForm.value.name,
        firePower: this.shipForm.value.firePower,
        speed: this.shipForm.value.speed,
        cargoCapacity: this.shipForm.value.cargoCapacity,
        kind: 'brick',
        position: null,
        available: true,
      };

      this.store.dispatch(new AddShip(ship));
      this.initShipForm();
    }
  }
}
