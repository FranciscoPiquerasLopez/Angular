import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./auth/register/register.component";

const routeConfig: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
];
export default routeConfig;