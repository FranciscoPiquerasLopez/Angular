import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterRequest, RegisterResponse } from "../interfaces/register.dto";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HttpService {
    private baseUrl = `http://localhost:3000`;

    // Constructor para instanciar el servicio HttpClient
    constructor(private http: HttpClient) { };

    // POST Observable<Usuario>
    registrarUsuario(userFromRegisterForm: RegisterRequest): Observable<RegisterResponse> {
        return this.http.post<RegisterResponse>(`${this.baseUrl}/users/register`, userFromRegisterForm);
    };
};