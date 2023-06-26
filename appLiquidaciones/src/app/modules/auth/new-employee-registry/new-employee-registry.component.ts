import { HttpErrorResponse } from '@angular/common/http';
import { CSP_NONCE, Component } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';
import { Model } from 'src/app/interfaces/exceptions/model';
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
  execptionMsg : Model = {statusNunber: 0, msg: ''}

  constructor(private _service: EmployeesService){}

  onSubmit(){
    this._service.createUser(this.newEmployee)
      .subscribe(
        (response: Employee) => {
          this.newEmployee = response;
          alert("Se ha creado el nuevo empleado")
        },
        (error: HttpErrorResponse) => {
        if (error.error.code == 406) {          
            alert(error.error.message);
        } else {
          alert("Informacion no valida.");
        }
        }
      )
  }
}
