import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        apiURL: 'http://localhost/api/',
        serverPath: 'http://localhost/',
        user: {},
        isLog: false,
        shopcar: []
    },
    /*  
  state: {
      apiURL: 'http://ec2-18-181-184-3.ap-northeast-1.compute.amazonaws.com/api',
      serverPath: 'http://ec2-18-181-184-3.ap-northeast-1.compute.amazonaws.com',
      isLogin: false,
      role: "",
  },*/

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
        SetToken(context, playload) {
            context.commit('SetToken', playload);
        }
    }
})
