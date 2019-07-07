import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import { People } from '../shared/models/people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: People[];

  pageLength: number = 0;
  pageSize: number = 10;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //this.people = this.swapiService.getPeople();
    this.apiService.getPeople().subscribe((request) => {
      this.pageLength = request.count;
      this.people = request.results;
    });
  }

}
