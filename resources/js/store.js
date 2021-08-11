import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as Login_Servercie from "./serveices/Login_serveice";
export default new Vuex.Store({
    /*
        state: {
            apiURL: 'http://localhost/api/',
            serverPath: 'http://localhost/',
            user: {},
            isLog: false,
            shopcar: []
        },
    
        */
    state: {
        apiURL: 'https://shopcar.hopto.org/api/',
        serverPath: 'https://shopcar.hopto.org/',
        user: {},
        isLog: false,
        shopcar: [],
    },

    mutations: {
        Login(state, userdata) {
            localStorage.setItem("user", JSON.stringify(userdata));
            state.user = userdata
            state.isLog = true
        },
        LogOut(state, data) {
            localStorage.removeItem("user");
            state.isLog = false
        },
        SetUser(state, data) {
            if (!localStorage.getItem("user")) {
                return
            }
            let userdata = JSON.parse(localStorage.getItem("user"))
            state.user = userdata;
            state.isLog = true
        },
        SetShopCar(state, data) {
            if (state.isLog) {
                state.shopcar.push(data)
            } else { state.shopcar = [] }
        },
        CancleShopCar(state, index) {
            state.shopcar.splice(index, 1);
        },
        LoadShopCar(state, data) {
            state.shopcar = data;
        }
    },
    actions: {

        LoadShopCar(context, playload) {

            Login_Servercie.LoadShopCar().then(response => context.commit('LoadShopCar', response.data));

        }
    }
})
