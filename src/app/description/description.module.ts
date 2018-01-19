import { NgModule } from '@angular/core';

import { ContainerModule } from '../container/container.module';

import { DescriptionComponent } from './description.component';

const components = [
  DescriptionComponent
];

@NgModule({
  imports: [
    ContainerModule,
  ],
  declarations: components,
  exports: components,
})
export class DescriptionModule { }
