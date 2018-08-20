import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceService } from './service/service.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from './find/find.component';


const routes: Routes = [
  {path: 'find', component: FindComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FindComponent,


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
