import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent{

  @Input() employessListchild: Employee[] = [];
  @Output() selectedEmployee: EventEmitter<Employee> = new EventEmitter();

employeeSelected(employee: Employee){
  this.selectedEmployee.emit(employee)
}
}
