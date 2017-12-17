import { NgModule } from '@angular/core';

import { Notifier } from './notifier/notifier.service';

// import './prototype-extensions/array-extensions';
// import './prototype-extensions/string-extensions';

@NgModule({
  providers: [
    Notifier
  ]
})
export class CoreModule { }
