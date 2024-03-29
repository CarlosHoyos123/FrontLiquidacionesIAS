import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';

/** Servicios */
import { EmployeesService } from '../employees.service';

// Parametros
import { environment } from '../../../../environments/environments.prod';
import { Model } from 'src/app/interfaces/exceptions/model';

@Injectable()
export class Interceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    /** Constructor */
    constructor(
        private _employeeService: EmployeesService,
        private injector: Injector) { }

    /** Intercept
     * @param req
     * @param next */
    intercept(req: any, next: HttpHandler): Observable<HttpEvent<any>> {

        let headers: any;

        //Valida si son los JSON
        if (req.url.includes('.json')) {
            headers = req.clone({
                setHeaders: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                }
            });
            return next.handle(headers);
        }

        //Valida si son los  assets
        if (req.url.includes('assets')) {
            // Response
            return next.handle(req).pipe(
                catchError(error => throwError(error)) /* throwError(error) */
            );
        }

        req.url = environment.url + '/' + req.url;

        const uploadFile = req.url.toLowerCase().includes('upload');

        if (true) { /*this._employeeService.session*/ 
            const contentType = !uploadFile ? { 'content-type': 'application/json' } : {};
            headers = req.clone({ setHeaders: { 'Authorization': 'Bearer ', ...contentType, } });
        } else {
            if (!uploadFile) { headers = req.clone({ setHeaders: { 'content-type': 'application/json' } }); }
            else { headers = req.clone(); }
        }

        // Response
        return next.handle(headers).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        );
    }
}