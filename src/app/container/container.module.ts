import { NgModule } from '@angular/core';

import { ContainerDirective } from './container.directive';

const components = [
  ContainerDirective,
];

@NgModule({
  declarations: components,
  exports: components,
})
export class ContainerModule { }
