import { NgModule } from '@angular/core';

import { SectionComponent } from './section.component';

const components = [
  SectionComponent
];

@NgModule({
  declarations: components,
  exports: components,
})
export class SectionModule { }
