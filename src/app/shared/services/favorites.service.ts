import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private STORAGE_KEY: string = 'favorites';

  public total: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this.total.next(this.getItems().size);
  }

  getItems(): Set<string> {
    const items = localStorage.getItem(this.STORAGE_KEY);

    if (items) {
      return new Set(items.split(','));
    }

    return new Set();
  }

  add(personID: string) {
    const items = this.getItems();
    items.add(personID);
    localStorage.setItem(this.STORAGE_KEY, Array.from(items).join(','));
    this.total.next(items.size);
  }

  remove(personID: string) {
    const items = this.getItems();
    items.delete(personID);
    localStorage.setItem(this.STORAGE_KEY, Array.from(items).join(','));
    this.total.next(items.size);
  }

  has(personID: string) {
    const items = this.getItems();
    return items.has(personID);
  }

  updateOrder(items: Array<string>) {
    localStorage.setItem(this.STORAGE_KEY, items.join(','));
  }
}
