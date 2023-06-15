import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeRegistryComponent } from './new-employee-registry.component';

describe('NewEmployeeRegistryComponent', () => {
  let component: NewEmployeeRegistryComponent;
  let fixture: ComponentFixture<NewEmployeeRegistryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEmployeeRegistryComponent]
    });
    fixture = TestBed.createComponent(NewEmployeeRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
