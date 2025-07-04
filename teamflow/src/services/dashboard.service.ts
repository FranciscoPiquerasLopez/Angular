import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataUserResponse } from "../app/dashboard/interfaces/dataUser.dto";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DashboardService {
    private baseUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) {}

    // GET para obtener información de un usuario
    getDataUser(): Observable<DataUserResponse> {
        return this.http.get<DataUserResponse>(`${this.baseUrl}/users/dataUser`);
    };
};