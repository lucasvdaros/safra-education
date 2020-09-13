import { TestBed } from '@angular/core/testing';
import { OptinService } from '../optin/optin.service';

describe('LoginService', () => {
  let service: OptinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
