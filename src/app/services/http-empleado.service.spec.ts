import { TestBed } from '@angular/core/testing';

import { HttpEmpleadoService } from './http-empleado.service';

describe('HttpEmpleadoService', () => {
  let service: HttpEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
