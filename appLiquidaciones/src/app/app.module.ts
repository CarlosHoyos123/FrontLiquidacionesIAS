import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/* ruteo */
import { appRutas } from './app.routing';

/* componentes */
import { AppComponent } from './app.component';
import { LayoutHomeComponent } from './modules/layout/layout-home/layout-home.component';
import { EmployeesListComponent } from './modules/home/employees-list/employees-list.component';
import { SearchBarComponent } from './modules/home/search-bar/search-bar.component';
import { NewEmployeeComponent } from './modules/home/new-employee/new-employee.component';
import { EmployeeInformationComponent } from './modules/home/employee-information/employee-information.component';
import { SeveranceSeccionComponent } from './modules/home/severance-seccion/severance-seccion.component';
import { Interceptor } from './services/employees/base/interceptor';
import { NewEmployeeRegistryComponent } from './modules/auth/new-employee-registry/new-employee-registry.component';
import { SalaryChangesTableComponent } from './modules/home/salary-changes-table/salary-changes-table.component';
import { SettlementComponent } from './modules/home/settlement/settlement.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutHomeComponent,
    EmployeesListComponent,
    SearchBarComponent,
    NewEmployeeComponent,
    EmployeeInformationComponent,
    SeveranceSeccionComponent,
    NewEmployeeRegistryComponent,
    SalaryChangesTableComponent,
    SettlementComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
