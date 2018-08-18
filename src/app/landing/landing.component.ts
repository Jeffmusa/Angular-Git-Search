import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  constructor(public service: ServiceService, private http: HttpClient) {}


  ngOnInit() {
    this.service.getMyInfo().subscribe(data => {
      this.user$ = data;
      console.log(data);
    });

  }

}
