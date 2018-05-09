import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AvailableComponent } from 'app/missions/available/available.component';
import { FinderComponent } from 'app/missions/finder/finder.component';
import { ListComponent } from 'app/missions/list/list.component';
import { MissionsComponent } from 'app/missions/missions.component';
import { InProgressComponent } from './in-progress/in-progress.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [MissionsComponent, ListComponent, FinderComponent, AvailableComponent, InProgressComponent],
  exports: [MissionsComponent],
})
export class MissionsModule {
}
