import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export const nameValidator = [
    Validators.required,
];

export const surnamesValidator = [
    Validators.required,
];

export const emailValidator = [
    Validators.required,
    Validators.email,
];

export const passwordValidator = [
    Validators.required,
    Validators.minLength(8),
    validatePassword(),
];

function validatePassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        // Recogemos contraseña del control
        const password = control.value as string;
        if (!password) {
            return null; // Si está vacío, devolvemos null
        }
        // Validaciones para una contraseña
        const hasUpper = /A-Z/.test(password);
        const hasLower = /a-z/.test(password);
        const hasNumber = /0-9/.test(password);
        const hasSymbol = /(?=.*[!@#$%^&*])/.test(password); // TODO: Hecharle un vistazo
        const valid = hasUpper && hasLower && hasNumber && hasSymbol;
        return valid
            ? null
            : { passwordStrength: { hasUpper, hasLower, hasNumber, hasSymbol } };
    };
};