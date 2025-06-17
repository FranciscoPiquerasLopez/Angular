import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import routeConfig from "./app-routes";
import { CredentialsInterceptor } from "../core/interceptors/credentials.interceptor";

export const appConfig: ApplicationConfig = {
    providers: [ // Aquí declaramos proveedores globales
        provideRouter(routeConfig),
        provideHttpClient(
            withInterceptorsFromDi() // -> aquí lee todos los HTTP_INTERCEPTORS
        ),
        { provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true },
    ]
};