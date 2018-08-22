import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ConferencesService {
  MAX_RETRY_ATTEMPS: number = 2;
  conferencesURL: string = 'https://webconf-api-2018.glitch.me/';

  constructor(
    public http: HttpClient
  ) { }
  /**
   * Return all conferences
   *
   * @returns {Observable<Subscription>}
   * @memberof ConferencesService
   */
  getAllConferences(): Observable<any> {
    return this.http.get(this.conferencesURL).pipe(
        retry(this.MAX_RETRY_ATTEMPS),
        catchError(err => {
          // Call your logger function to do anything
          console.log(`something very bad just happened ${err}`);
          // this is our default answer when all fails
          return of([]);
        })
    );
  }
}