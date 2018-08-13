import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  private names: string[] = ['Juan', 'Mati'];

  constructor() { }

  public getNames() {
    return this.names;
  }
}
