
import { ConferencesService } from './conferences.service';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

describe('Provider: Conferences Service', () => {

  let conferencesService: ConferencesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConferencesService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    conferencesService = TestBed.get(ConferencesService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(conferencesService).toBeTruthy(); // We hope the service has been inyected and defined
  });

  it('should be able to get All The conferences', () => {

    const expectedConferences: any = { September: [{ name: 'NG-COL' }] };
    conferencesService
      .getAllConferences()
      .subscribe((response) => {
        expect(response.September[0].name).toBe('NG-COL');
      });
    // HeroService should have made one request to GET heroes from expected URL
    const req = httpTestingController.expectOne(conferencesService.conferencesURL);
    expect(req.request.method).toEqual('GET');
    // Respond with the mock heroes
    req.flush(expectedConferences);
  });
});