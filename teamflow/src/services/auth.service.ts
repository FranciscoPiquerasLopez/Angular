import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterRequest, RegisterResponse } from "../app/auth/interfaces/register.dto";
import { LoginRequest } from "../app/auth/interfaces/login.dto";
import { map, Observable, tap } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {
    // Obtengo la URL de la API usando environment.ts
    // que es la forma oficial de Angular para
    // usar variables de entorno declaradas en la APP
    private baseUrl = environment.apiBaseUrl;
    private accessToken: string | null = null;

    // Constructor para instanciar el servicio HttpClient
    constructor(private http: HttpClient) { };

    // POST registro de nueva cuenta
    registrarUsuario(userFromRegisterForm: RegisterRequest): Observable<RegisterResponse> {
        return this.http.post<RegisterResponse>(
            `${this.baseUrl}/users/register`,
            userFromRegisterForm
        );
    };

    // POST de inicio de sesión
    iniciarSesion(userFromLoginForm: LoginRequest): Observable<void> {
        return this.http.post<{ accessToken: string }>(
            `${this.baseUrl}/users/login`,
            userFromLoginForm,
            { withCredentials: true }
        )
        .pipe(
            tap(response => {
                this.setAccessToken(response.accessToken);
            }),
            map(() => void 0)
        );
    };

    // Asignar el access token
    private setAccessToken(token: string) {
        this.accessToken = token;
    };

    // Obtener access token
    getToken(): string | null {
        return this.accessToken;
    };

    // Cerrar sesión
    logout() {
        this.accessToken = null;
        // Llamar a endpoint de logout si es necesario
    };
};