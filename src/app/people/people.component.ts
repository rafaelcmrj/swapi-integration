import { Component, OnInit } from '@angular/core';
import { Angular2SwapiService, People } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Observable<People[]>;

  constructor(private swapiService: Angular2SwapiService) { }

  ngOnInit() {
    this.people = this.swapiService.getPeople();
  }

}
