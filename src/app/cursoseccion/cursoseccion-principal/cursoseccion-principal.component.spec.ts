import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoseccionalumnoPrincipalComponent } from './cursoseccion-principal.component';

describe('CursoseccionalumnoPrincipalComponent', () => {
  let component: CursoseccionalumnoPrincipalComponent;
  let fixture: ComponentFixture<CursoseccionalumnoPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoseccionalumnoPrincipalComponent]
    });
    fixture = TestBed.createComponent(CursoseccionalumnoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
