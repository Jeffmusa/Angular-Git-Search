import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServiceService} from '../service/service.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  result$: any;

  constructor(public service: ServiceService, private http: HttpClient ) { }
  search(input) {
    this.http.get('https://api.github.com/users/' + input.value).subscribe( data => {
      this.result$ = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
