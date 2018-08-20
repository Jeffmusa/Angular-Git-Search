import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ServiceService],
})

export class SearchComponent implements OnInit {
  user$;
  repo$;
  constructor(public service: ServiceService, private http: HttpClient ) { }


  ngOnInit() {
    this.service.return().subscribe( tempo => {
      this.user$ = tempo;
      console.log(tempo);
      });

      this.service.getUserRepos().subscribe(data => {
        this.repo$ = data;
        console.log(data);
      });
  }

}
