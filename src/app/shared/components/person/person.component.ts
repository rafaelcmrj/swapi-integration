import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../models/people.model';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person: People;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {}

  onClickFavorite(person: People) {
    if (this.favoritesService.has(person.url)) {
      this.favoritesService.remove(person.url);
    } else {
      this.favoritesService.add(person.url);
    }
  }

}
