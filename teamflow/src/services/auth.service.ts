import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterRequest, RegisterResponse } from "../app/auth/interfaces/register.dto";
import { LoginRequest } from "../app/auth/interfaces/login.dto";
import { catchError, map, Observable, of, throwError } from "rxjs";
import { environment } from "../environments/environment";
import { parseJwt } from "../app/utils/parseJwt";

@Injectable({ providedIn: 'root' })
export class AuthService {
    // Obtengo la URL de la API usando environment.ts
    // que es la forma oficial de Angular para
    // usar variables de entorno declaradas en la APP
    private baseUrl = environment.apiBaseUrl;
    private accessToken: string | null = null;
    private tokenExpMs: number = 0;

    // Constructor para instanciar el servicio HttpClient
    constructor(private http: HttpClient) { };

    // POST registro de nueva cuenta
    registerUser(userFromRegisterForm: RegisterRequest): Observable<RegisterResponse> {
        return this.http.post<RegisterResponse>(
            `${this.baseUrl}/auth/register`,
            userFromRegisterForm
        );
    };

    // POST de inicio de sesión
    // Obtener por cookie HttpOnly refresh token
    // Obtener access token por JSON
    // La cookie del refresh token ya la aplica el navegador por ti
    loginUser(userFromLoginForm: LoginRequest): Observable<void> {
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

    // Obtener un token válido
    getValidAccessToken(): Observable<string> {
        if (this.accessToken !== null) { // Access Token en memoria
            const nowMs = Date.now();
            const timeRemeaningInMiliseconds = this.tokenExpMs - nowMs;
            if (timeRemeaningInMiliseconds <= 0) { // El token ha expirado
                return this.http.get<string>(`${this.baseUrl}/auth/refresh`)
                    .pipe(
                        map(accessToken => { // ✅ Devolvemos access token si no hay errores
                            return accessToken;
                        }),
                        catchError(err => { // ❌ Devolvemos error al interceptor
                            // Convertimos cualquier error HTTP o de map en un error RxJS
                            return throwError(() => err);
                        })
                    )
            } else { // El token no ha expirado, devolvemos el mismo
                return of(this.accessToken);
            }
        } else { // Access Token no está en memoria
            return this.http.get<string>(`${this.baseUrl}/auth/refresh`)
                .pipe(
                    map(accessToken => { // ✅ Devolvemos access token si no hay errores
                        return accessToken;
                    }),
                    catchError(err => { // ❌ Devolvemos error al interceptor
                        // Convertimos cualquier error HTTP o de map en un error RxJS
                        return throwError(() => err);
                    })
                )
        }
    };

    // Asignar el access token + parsear su contenido
    private setAccessToken(token: string) {
        this.accessToken = token;
        // Parsear payload del token y guardar la fecha de expiración del token en milisegundos
        const { exp } = parseJwt(token);
        this.tokenExpMs = exp * 1000;
    };

    logout() { // Cerrar sesión
        this.accessToken = null;
    };

};