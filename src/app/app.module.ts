import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from 'app/app.component';
import { appInitialState, AppState } from 'app/app.state';
import { MissionsModule } from 'app/missions/missions.module';
import { destinationsReducer } from 'app/shared/store/destinations.reducer';
import { missionsReducer } from 'app/shared/store/missions.reducer';

const reducers: ActionReducerMap<AppState> = {
  destinations: destinationsReducer,
  missions: missionsReducer,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MissionsModule,
    StoreModule.forRoot(reducers, { initialState: appInitialState }),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
