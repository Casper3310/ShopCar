import { http, httpToken } from "./http_serveice";

export function Register(RegisterData) {
    return http().post('register', RegisterData);
}

export function Login(LoginData) {
    return http().post('Login', LoginData);
}

export function Logout() {
    return httpToken().get('Logout');
}

export function LoadShopCar() {
    return httpToken().get('shopcar');
}