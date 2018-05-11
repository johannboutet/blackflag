import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FleetComponent } from 'app/fleet/fleet.component';
import { ShipFormComponent } from 'app/fleet/ship-form/ship-form.component';
import { ShipComponent } from 'app/fleet/ship/ship.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatGridListModule,
  ],
  declarations: [FleetComponent, ShipComponent, ShipFormComponent],
  exports: [FleetComponent],
  entryComponents: [ShipFormComponent],
})
export class FleetModule {
}
