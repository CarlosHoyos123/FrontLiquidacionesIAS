import { CSP_NONCE, Component } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-new-employee-registry',
  templateUrl: './new-employee-registry.component.html',
})
export class NewEmployeeRegistryComponent {

  newEmployee: Employee = {
    name:     "",
    idnumber: "",
    indate:   "",
    cargo:    "",
    salary:   0
  }

  constructor(private _service: EmployeesService){}

  onSubmit(){
    this._service.createUser(this.newEmployee)
      .subscribe((response: Employee) => {
        alert("Se ha creado el usuario.")
      })
  }
}
