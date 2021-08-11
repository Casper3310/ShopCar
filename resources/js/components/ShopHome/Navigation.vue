<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <router-link class="navbar-brand" to="/">首頁</router-link>
                    <li class="nav-item" v-if="this.$store.state.isLog">
                        <a type="button" class="nav-link"
                            >使用者:{{ this.$store.state.user.user.name }}</a
                        >
                    </li>
                    <li class="nav-item" v-if="this.$store.state.isLog">
                        <a type="button" class="nav-link"
                            >消費等級:{{ this.$store.state.user.user.level }}</a
                        >
                    </li>
                    <li class="nav-item" v-if="this.$store.state.isLog">
                        <router-link class="nav-link" to="/admin"
                            >後台</router-link
                        >
                    </li>
                    <li class="nav-item" v-if="this.$store.state.isLog">
                        <a type="button" class="nav-link" @click="Logout"
                            >登出</a
                        >
                    </li>
                    <li class="nav-item" v-if="!this.$store.state.isLog">
                        <Login></Login>
                    </li>
                    <li class="nav-item" v-if="!this.$store.state.isLog">
                        <Register></Register>
                    </li>
                </ul>

                <router-link class="btn btn-outline-dark" to="/shopcar">
                    <i class="fas fa-cart-arrow-down"></i>
                    購物車
                    <span class="badge bg-dark text-white ms-1 rounded-pill">{{
                        this.$store.state.shopcar.length
                    }}</span></router-link
                >
            </div>
        </div>
    </nav>
</template>
<script>
import Login from "../Login/Login.vue";
import Register from "../Login/Register.vue";
import * as Login_Servercie from "../../serveices/Login_serveice";

export default {
    components: {
        Login,
        Register
    },
    data() {
        return {
            isLogin: this.$store.state.isLog
        };
    },
    computed: {},
    mounted() {},
    methods: {
        Logout: async function() {
            try {
                const res = await Login_Servercie.Logout();
                this.$store.commit("LogOut");
            } catch (error) {
                console.log(error);
            }
            this.$store.commit("SetShopCar");
        },
        test: async function() {
            try {
                const res = await Login_Servercie.test();
                document.write(res.data);
                //window.open(res.data);
                //document.location.href = res.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    watch: {}
};
</script>
