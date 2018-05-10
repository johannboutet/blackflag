import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from 'app/missions/list/list.component';
import { MissionsComponent } from 'app/missions/missions.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [MissionsComponent, ListComponent],
  exports: [MissionsComponent],
})
export class MissionsModule {
}
