import { http, httpToken } from "./http_serveice";

export function LoadProduct() {
    return http().get('product');
}

export function GetUserProduct() {
    return httpToken().get('GetUserProduct');
}
export function CreateProduct(productdata) {
    return httpToken().post('product', productdata);
}

export function DeleteProduct(productID) {
    return httpToken().delete(`product/${productID}`);
}

export function EditProduct(productID, productdata) {
    return httpToken().put(`product/${productID}`, productdata);
}