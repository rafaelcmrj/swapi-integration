import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PeopleRequest } from '../models/people.model';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Planet } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private swapiUrl: string = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  getByPage(page: number): string {
    if (page) { return '&page=' + page; } else { return ''; }
  }

  filterBySearch(search: string): string {
    if (search) { return '&search=' + search; } else { return ''; }
  }

  getPeople(page ?: number, search?: string): Observable<PeopleRequest> {
    return this.http.get<PeopleRequest>(`${this.swapiUrl}people?format=json${this.getByPage(page)}${this.filterBySearch(search)}`).pipe(
      catchError(this.handleError)
    );
  }

  getPlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.swapiUrl}planets/${id}?format=json`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Handle HTTP Errors
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(`An error occurred:`, error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(`Something bad happened; please try again later.`);
  }
}
