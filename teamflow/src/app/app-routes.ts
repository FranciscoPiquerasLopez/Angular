import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./auth/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routeConfig: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
];
export default routeConfig;