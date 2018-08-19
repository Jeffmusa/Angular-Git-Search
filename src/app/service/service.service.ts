import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {environment} from '../environments/environment';

@@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) {


  }

  return() {
    return this.http.get('https://api.github.com/users/jeffmusa');

  }
getUserRepos() {
  return this.http.get('https://api.github.com/users/Jeffmusa/repos');

}

}
