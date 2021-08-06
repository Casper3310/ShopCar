import store from "../store";
import axios from 'axios';


export function http() {
    return axios.create({
        baseURL: store.state.apiURL,
    })
}

export function httpFile() {
    const Token = JSON.parse(localStorage.getItem("user")).token;
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: "Bearer " + Token
        }
    })
}

export function httpToken() {
    const Token = JSON.parse(localStorage.getItem("user")).token;
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            //'Content-Type': 'application/json',
            Authorization: "Bearer " + Token
        }
    })
}