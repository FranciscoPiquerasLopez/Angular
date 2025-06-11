export interface RegisterRequest {
    nombre: string;
    apellidos: string;
    correo_usuario: string;
    contraseña_usuario: string;
};

export interface RegisterResponse {
    usuario_id: number;
    correo_usuario: string;
    contraseña_usuario: string;
};