<template>
    <div>
        <router-view></router-view>
        <FlashMessage :position="'left top'"></FlashMessage>
    </div>
</template>
<script>
export default {
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
