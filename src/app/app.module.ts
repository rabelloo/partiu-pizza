import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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
export class AppModule { }
