import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from 'app/state/app.state';
import { ShipFormComponent } from 'app/fleet/ship-form/ship-form.component';
import { ShipInterface } from 'app/shared/models/ship.interface';
import * as fromFleet from 'app/state/fleet/fleet.reducer';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss'],
})
export class FleetComponent implements OnInit {
  @ViewChild('nameInput') nameControl: ElementRef;
  ships$: Observable<ShipInterface[]>;

  constructor(private store: Store<AppState>, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.ships$ = this.store.select(fromFleet.getShips);
  }

  openForm() {
    this.dialog.open(ShipFormComponent, { autoFocus: true, disableClose: true });
  }

  trackByPosition(index: number, ship: ShipInterface): number {
    if (ship) {
      return ship.position;
    }
  }
}
