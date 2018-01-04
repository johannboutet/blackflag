import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FleetModule } from 'app/fleet/fleet.module';
import { AvailableComponent } from 'app/missions/available/available.component';
import { FinderComponent } from 'app/missions/finder/finder.component';
import { ListComponent } from 'app/missions/list/list.component';
import { MissionsComponent } from 'app/missions/missions.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FleetModule,
  ],
  declarations: [MissionsComponent, ListComponent, FinderComponent, AvailableComponent],
  exports: [MissionsComponent],
})
export class MissionsModule {
}
