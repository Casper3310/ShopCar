import { httpToken } from "./http_serveice";

export function LoadShopCar() {
    return httpToken().get('shopcar');
}

export function StoreShopCar(shopcardata) {
    return httpToken().post('shopcar', shopcardata);
}

export function DeleteShopCar(productID) {
    return httpToken().delete(`shopcar/${productID}`);
}

export function CheckOut() {
    return httpToken().post(`shopcar/checkout`);
}