import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RefreshTokenInterceptor implements HttpInterceptor {
    // intercept identifica y analiza una solicitud HTTP determinada
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const clone = req.clone({ withCredentials: true });
        return next.handle(clone);
    }
};