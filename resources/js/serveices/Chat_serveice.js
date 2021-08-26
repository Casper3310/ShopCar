import { http, httpToken } from "./http_serveice";

export function SendMessage(message) {
    return httpToken().post('Chat/SendMessage', { "message": message });
}

export function GetMessage() {
    return httpToken().get('Chat/GetMessage');
}