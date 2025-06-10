import { Component } from "@angular/core";
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { emailValidator, nameValidator, passwordValidator, surnamesValidator } from "../../common/validatorFormControls";
import { validationMessagesSignInForm, validationMessagesSignUpForm } from "../../common/dictionaryErrorForms";

@Component({
    selector: 'auth-register',
    imports: [
        ReactiveFormsModule,
    ],
    templateUrl: './register.template.html',
    styleUrl: './register.styles.css',
})
export class RegisterComponent {
    // Indica si el panel del formulario HTML está activo y así
    // cambiar a vista de inicio de sesión o de creación de cuenta
    rightPanelActive = true;

    // Grupo de formulario con los controles de registro
    signUpForm = new FormGroup({
        name: new FormControl('', nameValidator),
        surnames: new FormControl('', surnamesValidator),
        email: new FormControl('', emailValidator),
        password: new FormControl('', passwordValidator),
    });

    // Grupo de formulario con los controles de inicio de sesión
    signInForm = new FormGroup({
        email: new FormControl('', emailValidator),
        password: new FormControl('', passwordValidator),
    });

    // Detectar si hay errores en campos del formulario de registro
    // y así mostrarlos en el HTML
    getErrorSignInFormMessage(controlName: string): string[] {
        const errors = this.signInForm.get(controlName)?.errors;
        if (!errors) {
            return [];
        }
        const arrayErrors = Object.keys(errors)
            .map(errorKey => validationMessagesSignInForm[controlName][errorKey]);
        return arrayErrors;
    };

    // Detectar si hay errores en campos del formulario de inicio de sesión
    // y así mostrarlos en el HTML
    getErrorSignUpFormMessage(controlName: string): string[] {
        const errors = this.signUpForm.get(controlName)?.errors;
        if (!errors) {
            return [];
        }
        const arrayErrors = Object.keys(errors)
            .map(errorKey => validationMessagesSignUpForm[controlName][errorKey]);
        return arrayErrors;
    };

    // Enviar el formulario de registro
    onSubmitSignInForm() {
        if (this.signInForm.valid) {
            // Objeto con los campos del formulario de inicio de sesión
            const signInObject = this.signInForm.value;
            // TODO: HTTP para endpoint de login de usuario
        }
    };

    // Enviar el formulario de inicio de sesión
    onSubmitSignUpForm() {
        if (this.signUpForm.valid) {
            // Objeto con los campos del formulario de registro
            const signUpFormObject = this.signUpForm.value;
            
        }
    };
}