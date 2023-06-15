import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';
import { Pagination } from 'src/app/interfaces/employees/pagination';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent{

  @Input() employessListchild: Employee[] = [];
  @Output() selectedEmployee: EventEmitter<Employee> = new EventEmitter();
  @Input() pagination: Pagination = {Page: 1,  EmployeesPerNumber: 5};
  @Output() employeesPerPageChange: EventEmitter<Pagination> = new EventEmitter();

employeeSelected(employee: Employee){
  this.selectedEmployee.emit(employee)
}

EmployeesPerPageChange(){
  this.employeesPerPageChange.emit(this.pagination)
}
}
