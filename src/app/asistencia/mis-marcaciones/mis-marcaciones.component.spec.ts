import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisMarcacionesComponent } from './mis-marcaciones.component';

describe('MisMarcacionesComponent', () => {
  let component: MisMarcacionesComponent;
  let fixture: ComponentFixture<MisMarcacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisMarcacionesComponent]
    });
    fixture = TestBed.createComponent(MisMarcacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
