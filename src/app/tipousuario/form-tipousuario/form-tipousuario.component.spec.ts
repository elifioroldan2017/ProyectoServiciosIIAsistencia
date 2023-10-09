import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipousuarioComponent } from './form-tipousuario.component';

describe('FormTipousuarioComponent', () => {
  let component: FormTipousuarioComponent;
  let fixture: ComponentFixture<FormTipousuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTipousuarioComponent]
    });
    fixture = TestBed.createComponent(FormTipousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
