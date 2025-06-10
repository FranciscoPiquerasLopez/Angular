// Diccionario de mensajes por campo y tipo de error
// del formulario de inicio de sesión
export const validationMessagesSignInForm: { [key: string]: { [errorType: string]: string } } = {
    email: {
        required: 'El correo es obligatorio',
        email: 'Formato de correo inválido',
    },
    password: {
        required: 'La contraseña es obligatoria',
        minlength: 'La contraseña debe tener mínimo 8 caracteres',
        passwordStrength: 'Debe incluir mayúscula, minúscula, número y símbolo',
    }
};

export const validationMessagesSignUpForm: { [key: string]: { [errorType: string]: string } } = {
    name: {
        required: 'El nombre es obligatorio',
    },
    surnames: {
        required: 'Los apellidos son obligatorios',
    },
    email: {
        required: 'El correo es obligatorio',
        email: 'Formato de correo inválido',
    },
    password: {
        required: 'La contraseña es obligatoria',
        minlength: 'La contraseña debe tener mínimo 8 caracteres',
        passwordStrength: 'Debe incluir mayúscula, minúscula, número y símbolo',
    }
};