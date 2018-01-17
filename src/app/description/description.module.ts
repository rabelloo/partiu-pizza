import { NgModule } from '@angular/core';

import { DescriptionComponent } from './description.component';

const components = [
  DescriptionComponent
];

@NgModule({
  declarations: components,
  exports: components,
})
export class DescriptionModule { }
