import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
user$;
  constructor(public http: HttpClient) {


  }

  getMyInfo() {
    this.http.get('https://api.github.com/users/jeffmusa');

  }
getUserRepos() {

}

}
