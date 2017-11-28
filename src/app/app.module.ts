import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { MissionsModule } from 'app/missions/missions.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MissionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
