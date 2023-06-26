import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/interfaces/employees/employee';
import { SalaryLogs } from 'src/app/interfaces/salaries/salaryLogs';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnChanges{

  @Input() information: Employee = {id: 0,idnumber:"", name:"", cargo:"",salary:0,indate:""};
  salariesList: SalaryLogs[] = [];
  salaryChangesFlag: boolean = false;
  constructor(private _Service: EmployeesService){}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.salaryChangesFlag = false;
  }
  salaryUpdate(){
    this._Service.salaryUpdate(this.information).
    subscribe((response: Employee) => {
      this.information = response;
      alert("Se ha actulizado el usuario.");
    });
  }

  salaryChangesList(){
    this._Service.salaryChangesList(this.information).
      subscribe((response: SalaryLogs[])=>{
        this.salariesList = response;
        this.salaryChangesFlag = true;
      })
  }

}
