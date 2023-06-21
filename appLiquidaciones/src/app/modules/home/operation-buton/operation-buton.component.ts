import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/interfaces/employees/employee';

@Component({
  selector: 'app-operation-buton',
  templateUrl: './operation-buton.component.html',
  styleUrls: ['./operation-buton.component.css']
})
export class OperationButonComponent {

@Input() operacion?: String = "";
@Input() isNewForm: boolean = true;

}
