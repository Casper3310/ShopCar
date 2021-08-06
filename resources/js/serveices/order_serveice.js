import { httpToken } from "./http_serveice";

export function LoadOrder() {
    return httpToken().get('order');
}

export function LoadCancelOrder() {
    return httpToken().get('order/LoadCancelOrder');
}

export function DeleteOrder(orderID) {
    return httpToken().delete(`order/${orderID}`);
}