import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import routeConfig from "./app-routes";

export const appConfig: ApplicationConfig = {
    providers: [ // Aquí declaramos proveedores globales
        provideRouter(routeConfig),
        provideHttpClient(
            // withInterceptorsFromDi()
        ),
        // { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true },
    ]
};