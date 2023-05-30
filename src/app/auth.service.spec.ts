import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for valid credentials', () => {
    const email = "testuser@t.de";
    const password = "test";
    const result = service.login(email, password);
    expect(result).toBeTruthy();
  })

  it('should return false for invalid credentials', () => {
    const email = "testuser@t.de";
    const password = "invalid";
    const result = service.login(email, password);
    expect(result).toBeFalsy();
  })
});
