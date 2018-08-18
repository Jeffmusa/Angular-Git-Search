import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ServiceService } from './service/service.service';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing/landing.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LandingComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
