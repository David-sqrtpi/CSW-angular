import { TestBed } from '@angular/core/testing';

import { HttpCuentasService } from './http-cuentas.service';

describe('HttpCuentasService', () => {
  let service: HttpCuentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCuentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
