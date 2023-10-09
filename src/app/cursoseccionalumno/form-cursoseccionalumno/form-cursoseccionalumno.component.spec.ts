import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCursoseccionalumnoComponent } from './form-cursoseccionalumno.component';

describe('FormCursoseccionalumnoComponent', () => {
  let component: FormCursoseccionalumnoComponent;
  let fixture: ComponentFixture<FormCursoseccionalumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCursoseccionalumnoComponent]
    });
    fixture = TestBed.createComponent(FormCursoseccionalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
