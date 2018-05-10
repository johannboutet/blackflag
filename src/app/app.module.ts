import { NgModule } from '@angular/core';
import { MatListModule, MatSidenavModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { DashboardModule } from 'app/dashboard/dashboard.module';
import { FleetModule } from 'app/fleet/fleet.module';
import { MissionsModule } from 'app/missions/missions.module';
import { appReducer } from 'app/state/app.reducer';
import { appInitialState } from 'app/state/app.state';
import { environment } from 'environments/environment';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer, { initialState: appInitialState }),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production,
      name: 'BlackFlag',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    DashboardModule,
    MissionsModule,
    FleetModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
