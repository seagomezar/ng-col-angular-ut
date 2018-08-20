
import { ConferencesService } from './conferences.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('Provider: Conferences Service', () => {
  let conferencesService: ConferencesService;
  let httpClient: HttpClient;
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
    conferencesService = TestBed.get(ConferencesService);
  });

  it('should be created', () => {
    expect(conferencesService).toBeTruthy(); // We hope the service has been inyected and defined
  });
});