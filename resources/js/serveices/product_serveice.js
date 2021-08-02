import { http } from "./http_serveice";

export function LoadProduct() {
    return http().get('product');
}