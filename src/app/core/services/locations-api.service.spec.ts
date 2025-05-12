import { TestBed } from '@angular/core/testing';

import { LocationsApiService } from './locations-api.service';

describe('LocationsApiService', () => {
  let service: LocationsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
