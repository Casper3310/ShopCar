import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        apiURL: 'http://localhost/api/',
        serverPath: 'http://localhost/',
        token: ""
    },
    /*  
  state: {
      apiURL: 'http://ec2-18-181-184-3.ap-northeast-1.compute.amazonaws.com/api',
      serverPath: 'http://ec2-18-181-184-3.ap-northeast-1.compute.amazonaws.com',
      isLogin: false,
      role: "",
  },*/

    mutations: {
        SetToken(state, playload) {

            state.token = playload;


        }
    },
    actions: {
        SetToken(context, playload) {
            context.commit('SetToken', playload);
        }
    }
})
