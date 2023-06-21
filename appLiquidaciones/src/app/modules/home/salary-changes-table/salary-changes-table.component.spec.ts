import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryChangesTableComponent } from './salary-changes-table.component';

describe('SalaryChangesTableComponent', () => {
  let component: SalaryChangesTableComponent;
  let fixture: ComponentFixture<SalaryChangesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryChangesTableComponent]
    });
    fixture = TestBed.createComponent(SalaryChangesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
