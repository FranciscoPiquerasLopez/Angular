export interface RegisterRequest {
    nombre_usuario: string;
    apellidos_usuario: string;
    correo_usuario: string;
    contraseña_usuario: string;
};

export interface RegisterResponse {
    message: string;
};