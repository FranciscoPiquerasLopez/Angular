import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterRequest, RegisterResponse } from "../app/auth/interfaces/register.dto";
import { LoginRequest } from "../app/auth/interfaces/login.dto";
import { catchError, map, Observable } from "rxjs";
import { environment } from "../environments/environment";
import { parseJwt } from "../app/utils/parseJwt";

@Injectable({ providedIn: 'root' })
export class AuthService {
    // Obtengo la URL de la API usando environment.ts
    // que es la forma oficial de Angular para
    // usar variables de entorno declaradas en la APP
    private baseUrl = environment.apiBaseUrl;
    private accessToken: string = "";
    private tokenExp: number = 0;

    // Constructor para instanciar el servicio HttpClient
    constructor(private http: HttpClient) { };

    // POST registro de nueva cuenta
    registrarUsuario(userFromRegisterForm: RegisterRequest): Observable<RegisterResponse> {
        return this.http.post<RegisterResponse>(
            `${this.baseUrl}/auth/register`,
            userFromRegisterForm
        );
    };

    // POST de inicio de sesión
    // Obtener por cookie HttpOnly refresh token
    // Obtener access token por JSON
    // La cookie del refresh token ya la aplica el navegador por ti
    iniciarSesion(userFromLoginForm: LoginRequest): Observable<void> {
        return this.http.post<{ accessToken: string }>(
            `${this.baseUrl}/auth/login`,
            userFromLoginForm,
            { withCredentials: true }
        )
            .pipe(
                map(res => this.setAccessToken(res.accessToken)),
                catchError(err => {
                    throw err;
                })
            );
    };

    refreshTokenPeticion() {
        return this.http.get(`${this.baseUrl}/auth/refresh`, { withCredentials: true })
            .subscribe(value => {
                console.log(value);
            })
    }

    // Asignar el access token
    private setAccessToken(token: string) {
        this.accessToken = token;
        // Obtener payload y guarday la fecha de expiración del jwt
        const { exp, iat } = parseJwt(token);
        this.tokenExp = exp * 1000;
    };

    // Obtener un token válido
    getValidAccessToken(): string {
        const nowMs = Date.now();
        const tokenParsed = parseJwt(this.accessToken);
        const expMs = tokenParsed.iat * 1000;
        const timeRemeaning = expMs - nowMs;
        return this.accessToken;
    };

    // TODO: Cerrar sesión

};