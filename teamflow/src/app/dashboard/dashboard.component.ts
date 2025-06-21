import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.template.html',
    styleUrl: './dashboard.styles.css',
})
export class DashboardComponent {
    constructor(private auth: AuthService) {}

    refreshToken() {
        this.auth.refreshTokenPeticion();
    }
};