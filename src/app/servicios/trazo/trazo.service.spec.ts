import { TestBed } from '@angular/core/testing';

import { TrazoService } from './trazo.service';

describe('TrazoService', () => {
  let service: TrazoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrazoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
