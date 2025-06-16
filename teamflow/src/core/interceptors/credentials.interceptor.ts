import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CredentialsInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // En todas las peticiones usaremos withCredentials
        // ya que se está usando HttpOnly
        const clone = req.clone({ withCredentials: true });
        return next.handle(clone);
    }
};