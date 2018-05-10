import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvailableMissionsComponent } from './available-missions/available-missions.component';
import { DashboardComponent } from './dashboard.component';
import { OngoingMissionsComponent } from './ongoing-missions/ongoing-missions.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AvailableMissionsComponent, OngoingMissionsComponent, DashboardComponent],
})
export class DashboardModule {}
