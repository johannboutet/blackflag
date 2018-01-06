import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FleetComponent } from './fleet.component';
import { ShipComponent } from './ship/ship.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [FleetComponent, ShipComponent],
  exports: [FleetComponent],
})
export class FleetModule {
}
