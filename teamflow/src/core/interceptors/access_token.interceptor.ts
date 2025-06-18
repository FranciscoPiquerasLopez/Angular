/**
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { AuthService } from "../../services/auth.service";


@Injectable({ providedIn: 'root' })
export class AccessTokenInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

     intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return this.auth.getValidAccessToken().pipe(
            switchMap(token => {
                const modifiedReq = req.clone({
                    setHeaders: { Authorization: `Bearer ${token}` }
                });
                return next.handle(modifiedReq);
            })
        )
    } 
};
*/