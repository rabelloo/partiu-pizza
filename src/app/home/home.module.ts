import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverStretchModule } from '../hover-stretch/hover-stretch.module';
import { SectionModule } from '../section/section.module';

import { HomeComponent } from './home.component';

const components = [
  HomeComponent,
];

@NgModule({
  imports: [
    CommonModule,
    HoverStretchModule,
    SectionModule,
  ],
  declarations: components,
  exports: components,
})
export class HomeModule { }
