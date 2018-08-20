import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';

@Injectable()
export class ConferencesService {
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
    return this.http.get(this.conferencesURL);
  }
}