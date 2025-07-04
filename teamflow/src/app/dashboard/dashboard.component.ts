import { Component } from "@angular/core";
import { DashboardService } from "../../services/dashboard.service";
import { DataUserResponse } from "./interfaces/dataUser.dto";

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.template.html',
    styleUrl: './dashboard.styles.css',
})
export class DashboardComponent {
    userInformation: DataUserResponse | null = null;
    constructor(private dashboardService: DashboardService) { }

    showDataUser() {
        this.dashboardService.getDataUser()
            .subscribe({
                next: res => {
                    this.userInformation = res
                },
                error: err => {
                    throw err
                }
            });
    };
};