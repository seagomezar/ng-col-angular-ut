import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should be the trylogin method returning ok with right credentials', inject([AuthenticationService], (service: AuthenticationService) => {
    // TODO: Here you need to create the test for the success case.
  }));

  it('should be the trylogin method error ok with wrong credentials', inject([AuthenticationService], (service: AuthenticationService) => {
    // TODO: Here you need to create the test for the error case.
  }));

});
