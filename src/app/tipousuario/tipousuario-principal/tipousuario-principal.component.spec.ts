import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioPrincipalComponent } from './tipousuario-principal.component';

describe('TipousuarioPrincipalComponent', () => {
  let component: TipousuarioPrincipalComponent;
  let fixture: ComponentFixture<TipousuarioPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipousuarioPrincipalComponent]
    });
    fixture = TestBed.createComponent(TipousuarioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
