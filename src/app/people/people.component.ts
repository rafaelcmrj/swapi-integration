import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { People } from '../shared/models/people.model';
import { PageEvent } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FavoritesService } from '../shared/services/favorites.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: People[];

  pageSize: number = 10;

  pageLength: number;  
  page: number;

  searchForm: FormGroup;
  isSearching: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.createSearchForm();
    this.resetPagination();
    this.loadPeople();
  }

  createSearchForm() {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required])
    });
  }

  resetPagination() {
    this.page = 1;
  }

  loadPeople() {
    this.apiService.getPeople(this.page, this.searchForm.get('search').value).subscribe((request) => {
      this.pageLength = request.count;
      this.people = request.results;
    });
  }

  onClickPagination(evt: PageEvent) {
    this.page = evt.pageIndex + 1;

    this.loadPeople();
  }

  onSubmitForm() {
    if (this.searchForm.valid) {
      this.isSearching = true;
      this.resetPagination();
      this.loadPeople();
    }
  }

  onResetForm() {
    this.isSearching = false;
    this.resetPagination();
    this.loadPeople();
  }
}
