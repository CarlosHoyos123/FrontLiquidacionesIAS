import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';
import { Pagination } from 'src/app/interfaces/employees/pagination';

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

  createUser(newEmployee: Employee){
    let body = JSON.stringify(newEmployee);
    const url = `${this.url}user/create`;
    return this._http.post<Employee>(url, body)
  }
}
