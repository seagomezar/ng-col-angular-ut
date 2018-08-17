import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConferencesService {

  constructor(
    public http: Http
  ) { }
  /**
   * Return all conferences
   *
   * @returns {Observable<Subscription>}
   * @memberof ConferencesService
   */
  getAllConferences(): Observable<any> {
    return this.http.get('https://webconf-api-2018.glitch.me/').pipe(map(res => res.json()));
  }
}