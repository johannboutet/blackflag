import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from 'app/app.component';
import { appInitialState, AppState } from 'app/app.state';
import { FleetModule } from 'app/fleet/fleet.module';
import { MissionsModule } from 'app/missions/missions.module';
import { destinationsReducer } from 'app/shared/store/destinations.reducer';
import { fleetReducer } from 'app/shared/store/fleet.reducer';
import { missionsReducer } from 'app/shared/store/missions.reducer';
import { environment } from 'environments/environment';

const reducers: ActionReducerMap<AppState> = {
  destinations: destinationsReducer,
  missions: missionsReducer,
  fleet: fleetReducer,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MissionsModule,
    FleetModule,
    StoreModule.forRoot(reducers, { initialState: appInitialState }),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
