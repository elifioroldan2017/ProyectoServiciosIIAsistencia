import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCursoComponent } from './tabla-curso.component';

describe('TablaCursoComponent', () => {
  let component: TablaCursoComponent;
  let fixture: ComponentFixture<TablaCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCursoComponent]
    });
    fixture = TestBed.createComponent(TablaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
