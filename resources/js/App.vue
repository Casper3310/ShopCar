<template>
    <div>
        <router-view></router-view>
        <FlashMessage :position="'left top'"></FlashMessage>
    </div>
</template>
<script>
import * as Login_Servercie from "./serveices/Login_serveice";
export default {
    mounted() {
        this.CheckLogin();
    },
    methods: {
        CheckLogin() {
            if (localStorage.getItem("user")) {
                let userdata = JSON.parse(localStorage.getItem("user"));
                this.$store.commit("SetUser", userdata);
                Login_Servercie.LoadShopCar().then(response =>
                    response.data.forEach(element => {
                        this.$store.commit("SetShopCar", element);
                    })
                );
            }
        }
    }
};
</script>
