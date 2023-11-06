import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlumnoComponent } from './modal-alumno.component';

describe('ModalAlumnoComponent', () => {
  let component: ModalAlumnoComponent;
  let fixture: ComponentFixture<ModalAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAlumnoComponent]
    });
    fixture = TestBed.createComponent(ModalAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
