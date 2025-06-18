import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.template.html',
    styleUrl: './dashboard.styles.css',
})
export class DashboardComponent {
    token = "";
    constructor(private auth: AuthService) {
        this.token = this.auth.getValidAccessToken();
    }
};