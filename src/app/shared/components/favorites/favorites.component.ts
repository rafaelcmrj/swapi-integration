import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  totalItems: number = 0;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.favoritesService.total.subscribe(total => {
      this.totalItems = total;
    })
  }

}
