import { Component } from "@angular/core";
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { emailValidator, nameValidator, passwordValidator, surnamesValidator } from "../../common/validatorFormControls";
import { validationMessagesSignInForm, validationMessagesSignUpForm } from "../../common/dictionaryErrorForms";
import { HttpService } from "./services/auth.service";
import { RegisterRequest } from "./interfaces/register.dto";
import { LoginRequest } from "./interfaces/login.dto";

@Component({
    selector: 'auth-register',
    imports: [
        ReactiveFormsModule,
    ],
    templateUrl: './register.template.html',
    styleUrl: './register.styles.css',
})
export class RegisterComponent {
    constructor(private authService: HttpService) { }

    // Indica si el panel del formulario HTML está activo y así
    // cambiar a vista de inicio de sesión o de creación de cuenta
    rightPanelActive: boolean = true;
    registerOk: string = '';
    registerError: string = '';
    loginError: string = '';

    // Grupo de formulario con los controles de registro
    signUpForm = new FormGroup({
        nombre_usuario: new FormControl('', nameValidator),
        apellidos_usuario: new FormControl('', surnamesValidator),
        correo_usuario: new FormControl('', emailValidator),
        contraseña_usuario: new FormControl('', passwordValidator),
    });

    // Grupo de formulario con los controles de inicio de sesión
    signInForm = new FormGroup({
        correo_usuario: new FormControl('', emailValidator),
        contraseña_usuario: new FormControl('', passwordValidator),
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

    // Enviar el formulario de inicio de sesión
    onSubmitSignInForm() {
        if (this.signInForm.valid) {
            // Objeto con los campos del formulario de inicio de sesión
            const signInObject = this.signInForm.value as LoginRequest;

            // Llamamos al servicio
            this.authService.iniciarSesion(signInObject)
                .subscribe((token) => {
                    if (token === 'Error') {
                        this.loginError = 'Error de inicio de sesión';
                    } else {
                        console.log();
                    }
                });
        }
    };

    // Enviar el formulario de registro de nueva cuenta
    onSubmitSignUpForm() {
        if (this.signUpForm.valid) {
            // Extraemos valores del formulario de registro
            const signUpFormObject = this.signUpForm.value as RegisterRequest;

            // Llamamos al servicio
            this.authService.registrarUsuario(signUpFormObject)
                .subscribe(registro => {
                    if (registro === 'Error') {
                        this.registerError = 'Error de registro';
                    } else {
                        this.registerOk = registro;
                    }
                });
        }
    };
}