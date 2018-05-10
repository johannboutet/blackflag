import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
  ],
  declarations: [
    SidenavComponent,
    LogoComponent,
    MenuComponent,
  ],
  exports: [
    SidenavComponent,
  ],
})
export class SidenavModule {}
