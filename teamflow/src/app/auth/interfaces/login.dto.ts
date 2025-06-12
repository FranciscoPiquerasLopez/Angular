export interface LoginRequest {
    correo_usuario: string;
    contraseña_usuario: string;
};

export interface LoginResponse {
    access_token: string;
};