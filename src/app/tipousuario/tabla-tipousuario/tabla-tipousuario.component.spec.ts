import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTipousuarioComponent } from './tabla-tipousuario.component';

describe('TablaTipousuarioComponent', () => {
  let component: TablaTipousuarioComponent;
  let fixture: ComponentFixture<TablaTipousuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaTipousuarioComponent]
    });
    fixture = TestBed.createComponent(TablaTipousuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
