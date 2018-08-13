import { TestBed, inject } from '@angular/core/testing'; // We always need this
import { NamesService } from './names.service'; // Our service to test

describe('NamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NamesService] // Service to test
    });
  });

  it('should be created', inject([NamesService], (service: NamesService) => {
    expect(service).toBeTruthy(); // We hope the service has been inyected and defined
  }));

});
