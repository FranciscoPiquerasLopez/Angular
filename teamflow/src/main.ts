import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";
// Punto de arranque de la aplicación

// bootstrapApplication es un método que se encarga de inicializar
// la aplicación desde AppComponent
bootstrapApplication(AppComponent, appConfig).catch(err => {
    throw new Error((err as Error).message);
})