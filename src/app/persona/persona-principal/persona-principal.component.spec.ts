import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaPrincipalComponent } from './persona-principal.component';

describe('PersonaPrincipalComponent', () => {
  let component: PersonaPrincipalComponent;
  let fixture: ComponentFixture<PersonaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaPrincipalComponent]
    });
    fixture = TestBed.createComponent(PersonaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
