import { TestBed } from '@angular/core/testing';

import { CursoseccionalumnoService } from './cursoseccionalumno.service';

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
