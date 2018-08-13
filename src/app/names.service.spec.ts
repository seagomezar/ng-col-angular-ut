import { TestBed, inject } from '@angular/core/testing'; // We always need this
import { NamesService } from './names.service'; // Our service to test

let service: NamesService;

describe('NamesService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NamesService] // Service to test
    });
    // It is another approach to put available the service during the tests.
    service = TestBed.get(NamesService); 
  });

  it('should be created',() => {
    expect(service).toBeTruthy(); // We hope the service has been inyected and defined
  });

  it('should return all names', () => {
    expect(service.getNames().length).toBe(service['names'].length);
  });

  it('should return the first name of the list of names', ()=>{
    /* hint: it should be similar to the all names test, think carefully about 
     * what do you want to test?*/
  });
  

});
