import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MissionsComponent } from 'app/missions/missions.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MissionsComponent],
  exports: [MissionsComponent],
})
export class MissionsModule {
}
