import { TestBed } from '@angular/core/testing';

import { HttpCallApiService } from './http-call-api.service';

describe('HttpCallApiService', () => {
  let service: HttpCallApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCallApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
