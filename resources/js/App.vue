<template>
    <div>
        <router-view></router-view>
        <FlashMessage :position="'left top'"></FlashMessage>
    </div>
</template>
<script>
import Navigation from "./components/ShopHome/Navigation.vue";

export default {
    components: {
        Navigation
    },
    mounted() {
        this.CheckLogin();
    },
    methods: {
        CheckLogin() {
            if (localStorage.getItem("user")) {
                let userdata = JSON.parse(localStorage.getItem("user"));
                this.$store.commit("SetUser", userdata);
                this.$store.dispatch("LoadShopCar");
            }
        }
    }
};
</script>
<style>
.img_size {
    max-width: 300px;
    max-width: 200px;
}
.img_size img {
    width: 100%;
    height: 100%;
}
.img_size_ls {
    max-width: 50px;
    max-width: 25px;
}
.img_size_ls img {
    width: 100%;
    height: 100%;
}
</style>
