import { TestBed } from '@angular/core/testing';

import { AuthSafraService } from './auth-safra.service';

describe('AuthService', () => {
  let service: AuthSafraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSafraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
