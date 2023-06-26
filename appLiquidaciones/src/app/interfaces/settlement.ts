import { Employee } from "./employees/employee";

export interface Settlement {
    employee: Employee;
    transportApply: boolean;
    transportSupport: number;
    withdrawalDate: String;
    withdrawalReason: String;
    workedTotalDays: number;
    workedDaysLastYear: number;
    workedDaysLastHalfYear: number;
    vacationDays: number;
    baseSalary:number ;
    cesatias: number;
    interesesCesantias: number;
    primaServicio: number;
    nomina: number;
    liquidacion: number;
    bono: number
}
