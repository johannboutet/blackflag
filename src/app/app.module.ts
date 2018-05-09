import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from 'app/app.component';
import { FleetModule } from 'app/fleet/fleet.module';
import { MissionsModule } from 'app/missions/missions.module';
import { appReducer } from 'app/state/app.reducer';
import { appInitialState } from 'app/state/app.state';
import { environment } from 'environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MissionsModule,
    FleetModule,
    StoreModule.forRoot(appReducer, { initialState: appInitialState }),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production,
      name: 'BlackFlag'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
