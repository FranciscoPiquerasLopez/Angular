import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import routeConfig from "./app-routes";
import { RefreshTokenInterceptor } from "../core/interceptors/refresh_token.interceptor";
import { AccessTokenInterceptor } from "../core/interceptors/access_token.interceptor";

export const appConfig: ApplicationConfig = {
    providers: [ // Aquí declaramos proveedores globales
        provideRouter(routeConfig),
        provideHttpClient(
            withInterceptorsFromDi() // -> aquí lee todos los HTTP_INTERCEPTORS
        ),
        { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true },
    ]
};