import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { People } from '../shared/models/people.model';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: People[];

  pageLength: number = 0;
  pageSize: number = 10;
  page: number = 1;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadPeople();
  }

  loadPeople() {
    this.apiService.getPeople(this.page).subscribe((request) => {
      this.pageLength = request.count;
      this.people = request.results;
    });
  }

  onClickPagination(evt: PageEvent) {
    this.page = evt.pageIndex + 1;

    this.loadPeople();
  }
}
