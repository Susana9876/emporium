import { TestBed } from '@angular/core/testing';

import { CodigoQRService } from './codigo-qr.service';

describe('CodigoQRService', () => {
  let service: CodigoQRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodigoQRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
