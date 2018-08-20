import { TestBed } from '@angular/core/testing'; // We always need this
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
     * what do you want to test?
     */
    expect(service.getFirstName()).toBe(service['names'][0]);
  });

  it('Should we get all elements in promise', () => {
      service.getNamesInPromise().then(names => {
        expect(names.length).toBe(service['names'].length);
      });
  });

  it('Should not we get the elements in promise', () => {
    /**
     * in order to make the promise failing you need to call the function
     * with true in the param. i.e: service.getNamesInPromise(true)
     */
    service.getNamesInPromise(true).catch(reason => {
      expect(reason).toBe('Promise is Failing');
    });
  });

  it('Should get the first name in Observable way', () => {

    service.getFirstNameInObservable().subscribe((name)=>{
      expect(name).toBe(service['names'][0]);
    });
    
  });

  /* Minimalist option, never ever do this because you are 
     testing two things instead of one */ 
  it('Should gretting a random name', ()=> {
    // AVOID
    expect(service.greetingsRandomName()).toContain('Hi');
  });

  // First let's test the random name
  it('Should return a random', () => {
    expect(service['_randomName']().length).toBeGreaterThan(1);
  });

  // Then let's spy and mock the random and test it.
  it('Should gretting a name', () => {
    spyOn<any>(service, '_randomName').and.returnValue("Peter");
    expect(service.greetingsRandomName()).toEqual('Hi Peter');
  });
  

});
