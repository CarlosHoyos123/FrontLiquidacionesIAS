import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeveranceSeccionComponent } from './severance-seccion.component';

describe('SeveranceSeccionComponent', () => {
  let component: SeveranceSeccionComponent;
  let fixture: ComponentFixture<SeveranceSeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeveranceSeccionComponent]
    });
    fixture = TestBed.createComponent(SeveranceSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
