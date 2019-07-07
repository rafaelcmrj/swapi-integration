import { Pipe, PipeTransform } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'favorite'
})
export class FavoritePipe implements PipeTransform {

  constructor(private favoritesService: FavoritesService) {

  }

  transform(value: any, ...args: any[]): Observable<boolean> {
    return this.favoritesService.total.pipe(
      map(total => {
        return this.favoritesService.has(value);
      })
    );
  }

}
