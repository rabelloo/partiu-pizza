import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationRef, NgModule } from '@angular/core';
import { HotModuleReloadModule } from '../hmr';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ContainerModule } from './container/container.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { NavBarModule } from './nav-bar/nav-bar.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    ContainerModule,
    FooterModule,
    HomeModule,
    NavBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule extends HotModuleReloadModule {
  constructor(appRef: ApplicationRef) {
    super(appRef);
  }
}
