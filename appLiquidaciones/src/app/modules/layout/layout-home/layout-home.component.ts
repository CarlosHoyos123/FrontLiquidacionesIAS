import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.css']
})
export class LayoutHomeComponent implements OnInit{

  constructor(private _Service: EmployeesService){ }

  employeeChosen: boolean = false;
  employessListFather :Employee[] = [];
  selectedEmployeeInChild : Employee = {id: 0,name:" ",idnumber:" ",indate:" ",cargo:" ",salary:0};

  ngOnInit(){
    this._Service.employessInfo(). 
      subscribe((response: Employee[]) =>{
        this.employessListFather = response;
        console.log(response)
      })
  }

  employeeSelectedInChild(event: Employee){
    this.selectedEmployeeInChild = event;
    this.employeeChosen = true;
    console.log(this.selectedEmployeeInChild);
  }

}
