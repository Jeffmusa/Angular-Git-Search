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
  result$;
  constructor(public service: ServiceService, private http: HttpClient ) { }
  search(input) {
    this.http.get('https://api.github.com/search/users?q=' + input.value).subscribe(  data => {
      this.result$ = data.items;
      console.log(data);
    });
  }

  ngOnInit() {
    this.service.return().subscribe( tempo => {
      this.user$ = tempo;
      console.log(tempo);
      });

  }

}
