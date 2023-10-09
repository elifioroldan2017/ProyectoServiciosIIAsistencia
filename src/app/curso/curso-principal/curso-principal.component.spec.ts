import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPrincipalComponent } from './curso-principal.component';

describe('CursoPrincipalComponent', () => {
  let component: CursoPrincipalComponent;
  let fixture: ComponentFixture<CursoPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoPrincipalComponent]
    });
    fixture = TestBed.createComponent(CursoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
