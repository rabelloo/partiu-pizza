import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { ContainerModule } from '../container/container.module';
import { LogoModule } from '../logo/logo.module';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';

const components = [
  NavBarComponent,
];

@NgModule({
  imports: [
    ContainerModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    LogoModule,
    RouterModule,
  ],
  declarations: components,
  exports: components,
})
export class NavBarModule { }
