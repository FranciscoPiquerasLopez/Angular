import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";


@Injectable({ providedIn: 'root' })
export class AccessTokenInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService, private router: Router) { }

     intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return this.auth.getValidAccessToken().pipe(
            switchMap(token => { // ✅ Access Token válido, porque hay refresh
                const modifiedReq = req.clone({
                    setHeaders: { Authorization: `Bearer ${token}` }
                });
                return next.handle(modifiedReq);
            }),
            catchError(err => { // ❌ Access Token inválido, porque no hay refresh
                this.auth.logout();
                this.router.navigate(['/login']);
                return throwError(() => err);
            })
        )
    } 
};