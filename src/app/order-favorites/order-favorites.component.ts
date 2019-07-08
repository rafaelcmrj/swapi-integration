import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../shared/services/favorites.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-order-favorites',
  templateUrl: './order-favorites.component.html',
  styleUrls: ['./order-favorites.component.scss']
})
export class OrderFavoritesComponent implements OnInit {

  items: Array<string>;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.items = Array.from(this.favoritesService.getItems());
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.favoritesService.updateOrder(this.items);
  }
}
