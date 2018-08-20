import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * This is how post should looks like based on 
 * the current implementation of https://github.com/typicode/jsonplaceholder#how-to
 */
export interface Post {
    title: string,
    body: string,
    userId: number
}

@Injectable()
export class PlaceholderService {
  endpointURL: string = 'https://jsonplaceholder.typicode.com/';

  constructor(
    public http: HttpClient
  ) { }
  /**
   * Return all conferences
   *
   * @returns {Observable<Subscription>}
   * @memberof ConferencesService
   */
  /** POST: add a new post to the database */
  addPost (post: Post): Observable<Post> {
      /** here is your method */
  }
}