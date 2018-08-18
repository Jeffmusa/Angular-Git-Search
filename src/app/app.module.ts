import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceService } from './service/service.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing/landing.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LandingComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)


  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
