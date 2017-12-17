import { NgModule } from '@angular/core';

import { HoverStretchDirective } from './hover-stretch.directive';

const components = [
  HoverStretchDirective,
];

@NgModule({
  declarations: components,
  exports: components,
})
export class HoverStretchModule { }
