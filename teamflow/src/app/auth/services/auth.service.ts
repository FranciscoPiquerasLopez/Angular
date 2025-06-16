import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterRequest } from "../interfaces/register.dto";
import { LoginRequest, LoginResponse } from "../interfaces/login.dto";
import { catchError, map, Observable, of } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class HttpService {
    // Obtengo la URL de la API usando environment.ts
    // que es la forma oficial de Angular para
    // usar variables de entorno declaradas en la APP
    private baseUrl = environment.apiBaseUrl;

    // Constructor para instanciar el servicio HttpClient
    constructor(private http: HttpClient) { };

    // POST registro de nueva cuenta
    registrarUsuario(userFromRegisterForm: RegisterRequest): Observable<string> {
        return this.http.post<string>(`${this.baseUrl}/users/register`, userFromRegisterForm)
        .pipe(
            map(() => '¡Registro exitoso!'),
            catchError(() => of('Error'))
        );
    };

    // POST de inicio de sesión
    iniciarSesion(userFromLoginForm: LoginRequest): Observable<string> {
        return this.http.post<string>(`${this.baseUrl}/users/login`, userFromLoginForm)
        .pipe(
            map((token) => token),
            catchError(() => of('Error'))
        );
    };
};