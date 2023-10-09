import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSeccionComponent } from './tabla-seccion.component';

describe('TablaSeccionComponent', () => {
  let component: TablaSeccionComponent;
  let fixture: ComponentFixture<TablaSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaSeccionComponent]
    });
    fixture = TestBed.createComponent(TablaSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
