<template>
    <div class="shopcar">
        <Navigation></Navigation>
        <div class="card-body" v-if="this.$store.state.shopcar.length">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">圖片</th>
                        <th scope="col">產品</th>
                        <th scope="col">價格</th>
                        <th scope="col">購買數量</th>
                        <th scope="col">操作</th>
                    </tr>
                </thead>
                <tbody
                    v-for="(item, index) in this.$store.state.shopcar"
                    :key="index"
                >
                    <tr>
                        <td>{{ index + 1 }}</td>
                        <td class="img_size_ls">
                            <img
                                :src="
                                    `${$store.state.serverPath}storage/${item.product.picture_path}`
                                "
                                alt=""
                            />
                        </td>
                        <td>{{ item.product.name }}</td>
                        <td>{{ item.product.price }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-danger"
                                @click="CancleShopCar(index, item.id)"
                            >
                                取消
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>總價格:{{ this.total }}</p>
            <button class="btn btn-primary btn-lg btn-block" @click="CheckOut">
                送出訂單
            </button>
        </div>
        <p v-else>
            無項目
        </p>
    </div>
</template>
<script>
import * as shopcar_serveice from "../../serveices/shopcar_serveice";
import Navigation from "../ShopHome/Navigation.vue";
export default {
    components: {
        Navigation
    },
    data() {
        return {};
    },
    computed: {
        total() {
            let total = 0;
            this.$store.state.shopcar.forEach(element => {
                total = element.product.price * element.quantity + total;
            });
            return total;
        }
    },
    mounted() {
        this.LoadShopCar();
    },
    methods: {
        CancleShopCar: async function(index, shopcarID) {
            try {
                const res = (await shopcar_serveice.DeleteShopCar(shopcarID))
                    .data;
            } catch (error) {}
            this.$store.commit("CancleShopCar", index);
        },
        CheckOut: async function() {
            const res = await shopcar_serveice.CheckOut();
            document.write(res.data);
        },
        LoadShopCar: async function() {
            try {
                const res = await shopcar_serveice.LoadShopCar();
                this.$store.commit("LoadShopCar", res.data);
            } catch (error) {
                console.log(res);
            }
        }
    },
    destroy() {}
};
</script>
<style>
.shopcar p {
    text-align: center;
    font-weight: 700;
    font-size: 50px;
}
</style>
