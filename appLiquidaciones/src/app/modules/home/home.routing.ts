import { Route } from "@angular/router";
import { EmployeesListComponent } from "./employees-list/employees-list.component";


export const homeRoutes: Route[] = [
    { path: '', component: EmployeesListComponent },
]