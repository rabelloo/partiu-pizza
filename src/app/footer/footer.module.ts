import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContainerModule } from '../container/container.module';
import { LogoModule } from '../logo/logo.module';

import { FooterComponent } from './footer.component';

const components = [
  FooterComponent,
];

@NgModule({
  imports: [
    ContainerModule,
    FlexLayoutModule,
    LogoModule,
  ],
  declarations: components,
  exports: components,
})
export class FooterModule { }
