import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  private names: string[] = ['Juan', 'Mati'];

  constructor() { }

  public getNames(): string[] {
    return this.names;
  }

  public getNamesInPromise(shouldFail: boolean = false): Promise<string[]> {

    const myPromise: Promise<string[]> = new Promise( (resolve, reject) => {
      if (shouldFail) {
        reject('Promise is Failing');
      } else {
        setTimeout(() => {
          resolve(this.names);
        }, 2000);
      }
    });
    return myPromise;
  
  }

  public getFirstName(): string {
    return this.names[0];
  }

  public getFirstNameInObservable(): Observable<string> {
    return of(this.names[0]);
  }
}
