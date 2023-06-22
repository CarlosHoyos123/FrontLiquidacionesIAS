import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';
import { Pagination } from 'src/app/interfaces/employees/pagination';
import { SalaryLogs } from 'src/app/interfaces/salaries/salaryLogs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private url: string = 'api/';

  constructor(private _http: HttpClient) { 
    
  }

  employessInfo(pagination: Pagination){
    const url = `${this.url}users/${pagination.Page}-${pagination.EmployeesPerNumber}`;
    return this._http.get<Employee[]>(url)
  }

  salaryUpdate(EmployeeForSalaryUpdate: Employee){
    let body = JSON.stringify(EmployeeForSalaryUpdate);
    const url = `${this.url}user/salaryUpdate`;
    return this._http.put<Employee>(url, body)
  }

  createUser(newEmployee: Employee){
    let body = JSON.stringify(newEmployee);
    const url = `${this.url}user/create`;
    return this._http.post<Employee>(url, body)
  }

  salaryChangesList(employee: Employee){
    const url = `${this.url}user/salaryUpdates/${employee.idnumber}`;
    return this._http.get<SalaryLogs[]>(url)
  }

  searchEmployyeById(string: String){
    const url = `${this.url}user/${string}`;
    return this._http.get<Employee>(url)
  }

  searchEmployyeByName(string: String){
    const url = `${this.url}users/${string}`;
    return this._http.get<Employee[]>(url)
  }
}
