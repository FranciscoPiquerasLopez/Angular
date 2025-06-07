import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import routeConfig from "./app/app-routes";
// Punto de arranque de la aplicación

// bootstrapApplication es un método que se encarga de inicializar
// la aplicación desde AppComponent
bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routeConfig)
    ],
}).catch(err => {
    throw new Error((err as Error).message);
})