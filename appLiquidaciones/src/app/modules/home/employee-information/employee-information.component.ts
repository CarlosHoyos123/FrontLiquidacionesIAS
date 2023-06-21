import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/interfaces/employees/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent{

  @Input() information: Employee = {id: 0,idnumber:"", name:"", cargo:"",salary:0,indate:""};
  
  constructor(private _Service: EmployeesService){}
  
  salaryUpdate(){
    this._Service.salaryUpdate(this.information).
    subscribe((response: Employee) => {
      this.information = response;
      alert("Se ha actulizado el usuario.");
    });

  }
}
