import { Pipe, PipeTransform } from '@angular/core';
import { People } from '../models/people.model';
import { ApiService } from '../services/api.service';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  constructor(private apiService: ApiService) {

  }

  transform(value: any, ...args: any[]): any {
    if (value) {
      const regExp = new RegExp('people\/([0-9]*?)\/');
      if (regExp.test(value)) {
        const personId = parseInt(regExp.exec(value)[1]);
        return this.apiService.getPerson(personId);
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
