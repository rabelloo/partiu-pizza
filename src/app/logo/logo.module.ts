import { NgModule } from '@angular/core';

import { LogoComponent } from './logo.component';

const components = [
  LogoComponent
];

@NgModule({
  declarations: components,
  exports: components,
})
export class LogoModule { }
