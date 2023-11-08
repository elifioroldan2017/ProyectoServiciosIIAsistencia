import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCursoseccionalumnoComponent } from './tabla-cursoseccionalumno.component';

describe('TablaCursoseccionalumnoComponent', () => {
  let component: TablaCursoseccionalumnoComponent;
  let fixture: ComponentFixture<TablaCursoseccionalumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCursoseccionalumnoComponent]
    });
    fixture = TestBed.createComponent(TablaCursoseccionalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
