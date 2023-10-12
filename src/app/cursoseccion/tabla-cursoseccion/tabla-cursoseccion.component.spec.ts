import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCursoseccionComponent } from './tabla-cursoseccion.component';

describe('TablaCursoseccionalumnoComponent', () => {
  let component: TablaCursoseccionComponent;
  let fixture: ComponentFixture<TablaCursoseccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCursoseccionComponent]
    });
    fixture = TestBed.createComponent(TablaCursoseccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
