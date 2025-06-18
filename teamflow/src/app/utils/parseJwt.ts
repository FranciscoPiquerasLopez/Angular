type ResponseTokenJson = {
    sub: number;
    email: string;
    iat: number;
    exp: number;
};

export function parseJwt(token: string): ResponseTokenJson {
    const payloadBase64 = token.split('.')[1];
    const payloadJson = atob(payloadBase64);
    return JSON.parse(payloadJson);
};