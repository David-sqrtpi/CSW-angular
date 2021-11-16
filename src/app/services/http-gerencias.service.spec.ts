import { TestBed } from '@angular/core/testing';

import { HttpGerenciasService } from './http-gerencias.service';

describe('HttpGerenciasService', () => {
  let service: HttpGerenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGerenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
