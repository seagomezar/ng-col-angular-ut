
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

  it('should be able to get All The conferences at the first time', () => {
    const expectedConferences: any = { September: [{ name: 'NG-COL' }] };
    conferencesService
      .getAllConferences()
      .subscribe((response) => {
        expect(response.September[0].name).toBe('NG-COL');
      });
    // Conference should have made one request to GET conferences from expected URL
    const req = httpTestingController.expectOne(conferencesService.conferencesURL);
    expect(req.request.method).toEqual('GET');
    // Respond with the mock conferences
    req.flush(expectedConferences);
  });

  it('should be able to manage the error and conferences lenght should be 0', () => {
    /* You will be noticed this test is failing because retry
     * operator is going to create more request and due to 
     * httpTestingController.verify(); you need to handle every single
     * request so what to do?
     *
     * TODO: REWRITE this test to works with the retry operator and 
     * be sure respond the propertly number of times
     * according to conferencesService.MAX_RETRY_ATTEMPS 
     */

     // Don't touch this, it is completely fine
    conferencesService
      .getAllConferences()
      .subscribe((response) => {
        expect(response.length).toBe(0);
      }, err => {
        /* You will noticed it never get called because we are returning observable
        in case of error */
        console.log("ERROR", err);
        fail('Unwanted code branch');
      });
    
    // Here is the deal
    const req = httpTestingController.expectOne(conferencesService.conferencesURL);
    expect(req.request.method).toEqual('GET');
    const msg = 'deliberate 404 error';
    req.flush(msg, {status: 404, statusText: 'Not Found'}) ;
  });

  it('Should be able to get all the conferences in last attemp', () => {
    /* This should be pretty similar to the last test with the difference
     * in the last attemp we will resolve propertly the request
     */
  });
});