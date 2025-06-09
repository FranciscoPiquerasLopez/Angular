import { Component } from "@angular/core";
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'auth-register',
    imports: [
        ReactiveFormsModule,
    ],
    templateUrl: './register.template.html',
    styleUrl: './register.styles.css',
})
export class RegisterComponent {
    // Para cambiar la vista de los overlays y pasar al modo de inicio de sesión
    // o de registro de nueva cuenta
    rightPanelActive = true;

    // FormGroup para agrupar varias instancias de control de formulario
    // FormControl para hacer instancias individuales de campos específicos de HTML
    signUpForm = new FormGroup({
        name: new FormControl(''),
        surnames: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
    });

    signInForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    onSubmitSignInForm() {
        if (this.signInForm.valid) {
            // Objeto con los campos del formulario de inicio de sesión
            const signInObject = this.signInForm.value;
        } else {
            // TODO: Mejorar esto
        }
    };

    onSubmitSignUpForm() {
        if (this.signUpForm.valid) {
            // Objeto con los campos del formulario de registro
            const signUpFormObject = this.signUpForm.value;
        } else {
            // TODO: Mejorar esto
        }
    }

}