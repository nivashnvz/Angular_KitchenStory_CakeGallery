import { TestBed } from '@angular/core/testing';

import { NivashService } from './nivash.service';

describe('NivashService', () => {
  let service: NivashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
