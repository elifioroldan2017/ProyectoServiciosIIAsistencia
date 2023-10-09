import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaPrincipalComponent } from './asistencia-principal.component';

describe('AsistenciaPrincipalComponent', () => {
  let component: AsistenciaPrincipalComponent;
  let fixture: ComponentFixture<AsistenciaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenciaPrincipalComponent]
    });
    fixture = TestBed.createComponent(AsistenciaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
