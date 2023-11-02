import { TestBed } from '@angular/core/testing';

import { CursoseccionService } from './cursoseccion.service';

describe('CursoseccionalumnoService', () => {
  let service: CursoseccionalumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoseccionalumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
