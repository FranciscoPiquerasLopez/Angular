// Diccionario de mensajes por campo y tipo de error
// del formulario de inicio de sesión
export const validationMessagesSignInForm: { [key: string]: { [errorType: string]: string } } = {
    correo_usuario: {
        required: 'El correo es obligatorio',
        email: 'Formato de correo inválido',
    },
    contraseña_usuario: {
        required: 'La contraseña es obligatoria',
        minlength: 'La contraseña debe tener mínimo 8 caracteres',
        passwordStrength: 'Debe incluir mayúscula, minúscula, número y símbolo',
    }
};

export const validationMessagesSignUpForm: { [key: string]: { [errorType: string]: string } } = {
    nombre_usuario: {
        required: 'El nombre es obligatorio',
    },
    apellidos_usuario: {
        required: 'Los apellidos son obligatorios',
    },
    correo_usuario: {
        required: 'El correo es obligatorio',
        email: 'Formato de correo inválido',
    },
    contraseña_usuario: {
        required: 'La contraseña es obligatoria',
        minlength: 'La contraseña debe tener mínimo 8 caracteres',
        passwordStrength: 'Debe incluir mayúscula, minúscula, número y símbolo',
    }
};