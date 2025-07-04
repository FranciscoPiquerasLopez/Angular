import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";


@Injectable({ providedIn: 'root' })
export class AccessTokenInterceptor implements HttpInterceptor {
    private skipUrls = [
        'auth/login',
        'auth/register',
    ];
    constructor(private auth: AuthService, private router: Router) { }

     intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Obviamos el login y el register
        // Hay no tenemos el access_token aún
        if (this.skipUrls.some(url => req.url.includes(url))) {
            return next.handle(req);
        }
        return this.auth.getValidAccessToken().pipe(
            switchMap(token => { // ✅ Recuperamos access token
                const modifiedReq = req.clone({
                    setHeaders: { Authorization: `Bearer ${token}` }
                });
                return next.handle(modifiedReq);
            }),
            catchError(err => { // ❌ access token inválido
                this.auth.logout();
                this.router.navigate(['/register']);
                return throwError(() => err);
            })
        )
    } 
};