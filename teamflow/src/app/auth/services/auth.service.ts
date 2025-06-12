import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterRequest, RegisterResponse } from "../interfaces/register.dto";
import { Observable } from "rxjs";
import { LoginRequest, LoginResponse } from "../interfaces/login.dto";

@Injectable({ providedIn: 'root' })
export class HttpService {
    private baseUrl = `http://localhost:3000`;

    // Constructor para instanciar el servicio HttpClient
    constructor(private http: HttpClient) { };

    // POST registro de nueva cuenta
    registrarUsuario(userFromRegisterForm: RegisterRequest): Observable<RegisterResponse> {
        return this.http.post<RegisterResponse>(`${this.baseUrl}/users/register`, userFromRegisterForm);
    };

    // POST de inicio de sesión
    iniciarSesion(userFromLoginForm: LoginRequest) {
        return this.http.post<LoginResponse>(`${this.baseUrl}/users/login`, userFromLoginForm);
    };
};