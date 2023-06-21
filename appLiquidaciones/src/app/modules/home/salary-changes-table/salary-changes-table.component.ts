import { Component, Input } from '@angular/core';
import { SalaryLogs } from 'src/app/interfaces/salaries/salaryLogs';

@Component({
  selector: 'app-salary-changes-table',
  templateUrl: './salary-changes-table.component.html',
  styleUrls: ['./salary-changes-table.component.css']
})
export class SalaryChangesTableComponent {

  @Input() childList: SalaryLogs[] = [];

}
