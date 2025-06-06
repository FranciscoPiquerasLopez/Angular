import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
// Punto de arranque de la aplicación

// bootstrapApplication es un método que se encarga de inicializar
// la aplicación desde AppComponent
bootstrapApplication(AppComponent)
    .catch(err => {
        throw new Error((err as Error).message);
    })