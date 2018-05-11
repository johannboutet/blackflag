import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { AvailableMissionsComponent } from './available-missions/available-missions.component';
import { DashboardComponent } from './dashboard.component';
import { OngoingMissionsComponent } from './ongoing-missions/ongoing-missions.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  declarations: [AvailableMissionsComponent, OngoingMissionsComponent, DashboardComponent],
})
export class DashboardModule {}
