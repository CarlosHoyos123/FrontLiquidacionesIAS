import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';
import { Model } from 'src/app/interfaces/exceptions/model';
import { Settlement } from 'src/app/interfaces/settlement';
import { EmployeesService } from 'src/app/services/employees/employees.service';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit{

  @Input() employee: Employee = {id: 0,idnumber:"", name:"", cargo:"",salary:0,indate:""};

  selectedDate: any;

  info: Settlement = {employee: this.employee, transportApply:false, transportSupport:0,
                      withdrawalDate: "", withdrawalReason: "",
                      workedTotalDays:0, workedDaysLastYear: 0, workedDaysLastHalfYear:0,
                      vacationDays:0, baseSalary:0, cesatias:0, interesesCesantias:0,
                      primaServicio:0, nomina:0, liquidacion:0, bono:0
                    };

  constructor(private _service: EmployeesService){}

  ngOnInit(){
    
  }

  settlementService(){
    this.info.employee = this.employee;
    this._service.settlement(this.info).
      subscribe((response: Settlement)=>{
        this.info = response;
        console.log(response);
    },
    (error: HttpErrorResponse) => {
      if (error.error.code === 406){
        alert(error.error.message);
      }
    })
  }
}
