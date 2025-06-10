import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class HttpService {
    // Servicio para hacer solicitudes HTTP al servidor
    private http = inject(HttpClient);

    
};