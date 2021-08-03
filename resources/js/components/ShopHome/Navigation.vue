<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <router-link class="navbar-brand" to="/">首頁</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/"
                            >home</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin"
                            >後台</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <Login></Login>
                    </li>
                    <li class="nav-item">
                        <Register></Register>
                    </li>
                    <li class="nav-item">
                        <a type="button" class="nav-link" @click="Logout"
                            >登出</a
                        >
                    </li>
                </ul>
                <button class="btn btn-outline-dark" type="submit">
                    <i class="bi-cart-fill me-1"></i>
                    Cart
                    <span class="badge bg-dark text-white ms-1 rounded-pill"
                        >0</span
                    >
                </button>
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
    mounted() {},
    methods: {
        Logout: async function() {
            try {
                const res = await Login_Servercie.Logout();
                console.log(res);
                localStorage.removeItem("Token");
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>
