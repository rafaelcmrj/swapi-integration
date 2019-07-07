import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from '../services/api.service';

@Pipe({
  name: 'homeworld'
})
export class HomeWorldPipe implements PipeTransform {

  constructor(private apiService: ApiService) {}

  transform(value: any, ...args: any[]): any {
    if (value) {
      const regExp = new RegExp('planets\/([0-9]*?)\/');
      if (regExp.test(value)) {
        const planetId = parseInt(regExp.exec(value)[1]);
        return this.apiService.getPlanet(planetId);
      } else {
        // planet id not found in the string
        return value;
      }
    } else {
      // value not valid
      return value;
    }
  }

}
