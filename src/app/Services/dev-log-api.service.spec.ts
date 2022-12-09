import { TestBed } from '@angular/core/testing';

import { DevLogApiService } from './dev-log-api.service';

describe('DevLogApiService', () => {
  let service: DevLogApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevLogApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
