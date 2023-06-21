import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationButonComponent } from './operation-buton.component';

describe('OperationButonComponent', () => {
  let component: OperationButonComponent;
  let fixture: ComponentFixture<OperationButonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationButonComponent]
    });
    fixture = TestBed.createComponent(OperationButonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
