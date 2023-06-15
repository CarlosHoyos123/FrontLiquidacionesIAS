import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';
import { Pagination } from 'src/app/interfaces/employees/pagination';
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
  paginationScope: Pagination = {Page: 1, EmployeesPerNumber: 5};

  ngOnInit(){
    this._Service.employessInfo(this.paginationScope). 
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

  reloadEmployees(event: Pagination){
    this.paginationScope = event;
    this._Service.employessInfo(this.paginationScope). 
      subscribe((response: Employee[]) =>{
        this.employessListFather = response;
      })
  }

}
