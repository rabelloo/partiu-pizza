import { NgModule } from '@angular/core';

import { DescriptionModule } from '../description/description.module';
import { HoverStretchModule } from '../hover-stretch/hover-stretch.module';
import { SectionModule } from '../section/section.module';

import { HomeComponent } from './home.component';

const components = [
  HomeComponent,
];

@NgModule({
  imports: [
    DescriptionModule,
    HoverStretchModule,
    SectionModule,
  ],
  declarations: components,
  exports: components,
})
export class HomeModule { }
