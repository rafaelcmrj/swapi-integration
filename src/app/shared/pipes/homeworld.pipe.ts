import { Pipe, PipeTransform } from '@angular/core';
import { Angular2SwapiService } from 'angular2-swapi';

@Pipe({
  name: 'homeworld'
})
export class HomeWorldPipe implements PipeTransform {

  constructor(private swapiService: Angular2SwapiService) {}

  transform(value: any, ...args: any[]): any {
    if (value) {
      const regExp = new RegExp('planets\/([0-9]*?)\/');
      if (regExp.test(value)) {
        const planetId = parseInt(regExp.exec(value)[1]);
        return this.swapiService.getPlanet(planetId);
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
