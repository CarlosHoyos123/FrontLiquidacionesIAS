import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private url: string = 'api/';

  constructor(private _http: HttpClient) { 
    
  }

  employessInfo(){
    const url = `${this.url}users`;
    console.log(url)
    return this._http.get<Employee[]>(url)
  }

  createUser(newEmployee: Employee){
    let body = JSON.stringify(newEmployee);
    const url = `${this.url}user/create`;
    return this._http.post<Employee>(url, body)
  }
}