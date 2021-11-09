import { TestBed } from '@angular/core/testing';

import { HttpServiciosService } from './http-servicios.service';

describe('HttpServiciosService', () => {
  let service: HttpServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
