
import { ConferencesService } from './conferences.service';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// Other imports
import { TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';
import { of } from 'rxjs';

describe('Provider: Conferences Service', () => {

  let conferencesService: ConferencesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        ConferencesService,
        {provide: Http, useValue: httpClientSpy}
      ],
      imports: []
    });
    conferencesService = TestBed.get(ConferencesService);
  });

  it('should be able to get All The conferences', () => {
    const expectedHeroes: any = {September: [{name: 'NG-COL'}]};
    httpClientSpy.get.and.returnValue(of(expectedHeroes));
    conferencesService
      .getAllConferences() 
      .subscribe((response) => {
        expect(response.September[0].name).toBe('NG-BE 2018');
      });
  });
});