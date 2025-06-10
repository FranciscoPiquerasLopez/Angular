import { Component } from "@angular/core";
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { emailValidator, nameValidator, passwordValidator, surnamesValidator } from "../../../common/validatorFormControls";
import { validationMessagesSignInForm, validationMessagesSignUpForm } from "../../../common/dictionaryErrorForms";

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
        name: new FormControl('', nameValidator),
        surnames: new FormControl('', surnamesValidator),
        email: new FormControl('', emailValidator),
        password: new FormControl('', passwordValidator),
    });

    signInForm = new FormGroup({
        email: new FormControl('', emailValidator),
        password: new FormControl('', passwordValidator),
    });

    getErrorSignInFormMessage(controlName: string): string[] {
        const errors = this.signInForm.get(controlName)?.errors;
        if (!errors) {
            return [];
        }
        const arrayErrors = Object.keys(errors)
            .map(errorKey => validationMessagesSignInForm[controlName][errorKey]);
        return arrayErrors;
    };

    getErrorSignUpFormMessage(controlName: string): string[] {
        const errors = this.signUpForm.get(controlName)?.errors;
        if (!errors) {
            return [];
        }
        const arrayErrors = Object.keys(errors)
            .map(errorKey => validationMessagesSignUpForm[controlName][errorKey]);
        return arrayErrors;
    };

    onSubmitSignInForm() {
        if (this.signInForm.valid) {
            // Objeto con los campos del formulario de inicio de sesión
            const signInObject = this.signInForm.value;
        }
    };

    onSubmitSignUpForm() {
        if (this.signUpForm.valid) {
            // Objeto con los campos del formulario de registro
            const signUpFormObject = this.signUpForm.value;
        }
    };
}