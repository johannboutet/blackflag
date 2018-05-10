import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { FleetComponent } from 'app/fleet/fleet.component';
import { MissionsComponent } from 'app/missions/missions.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'fleet',
    component: FleetComponent,
  },
  {
    path: 'missions',
    component: MissionsComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
