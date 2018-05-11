import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from 'app/state/app.state';
import { SHIP_KINDS, Ship } from 'app/shared/models/ship';
import { AddShip } from 'app/state/fleet/fleet.actions';

@Component({
  selector: 'app-ship-form',
  templateUrl: './ship-form.component.html',
  styleUrls: ['./ship-form.component.scss'],
})
export class ShipFormComponent implements OnInit {
  shipForm: FormGroup;
  shipKinds = SHIP_KINDS;

  constructor(public dialogRef: MatDialogRef<ShipFormComponent>, private store: Store<AppState>, private fb: FormBuilder) {
  }

  ngOnInit() {
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
      const ship: Ship = {
        name: this.shipForm.value.name,
        firePower: this.shipForm.value.firePower,
        speed: this.shipForm.value.speed,
        cargoCapacity: this.shipForm.value.cargoCapacity,
        kind: this.shipForm.value.kind,
        position: null,
        mission: null,
      };

      this.store.dispatch(new AddShip(ship));
      this.close();
    }
  }

  close() {
    this.dialogRef.close();
  }
}
