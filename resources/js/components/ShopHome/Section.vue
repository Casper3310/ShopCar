<template>
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div
                class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            >
                <div
                    class="col mb-5"
                    v-for="(item, index) in ProductList"
                    :key="index"
                >
                    <div class="card h-100">
                        <!-- Product image-->
                        <div class="img_size">
                            <img
                                class="card-img-top"
                                :src="
                                    `${$store.state.serverPath}storage/${item.picture_path}`
                                "
                                alt="..."
                            />
                        </div>

                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">{{ item.name }}</h5>
                                <div class="fw-bolder">
                                    剩餘數量:{{ item.quantity }}
                                </div>
                                <!-- Product price-->
                                價格:{{ item.price }}
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <button
                                @click="
                                    CountBuyNumber(index, -1, item.quantity)
                                "
                                class="btn btn-outline-secondary"
                                type="button"
                                id="button-addon1"
                            >
                                -
                            </button>

                            <input
                                class="form-control text-center"
                                type="number"
                                :max="item.quantity"
                                min="0"
                                v-model.number="item.BuyNumber"
                                @change="CheackBuyNumber(index, item.quantity)"
                            />
                            <button
                                @click="CountBuyNumber(index, 1, item.quantity)"
                                class="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                            >
                                +
                            </button>
                        </div>

                        <!-- Product actions-->
                        <div
                            class="card-footer p-4 pt-0 border-top-0 bg-transparent"
                        >
                            <div class="text-center">
                                <a
                                    class="btn btn-outline-dark mt-auto"
                                    @click="SetShopCar(index)"
                                    >加入購物車</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import * as product_serveice from "../../serveices/product_serveice";
import * as shopcar_serveice from "../../serveices/shopcar_serveice";

export default {
    data() {
        return { ProductList: [] };
    },
    mounted() {
        this.LoadProduct();
    },
    methods: {
        SetShopCar: async function(index) {
            if (this.$store.state.isLog) {
                try {
                    let product = this.ProductList[index];

                    const res = await shopcar_serveice.StoreShopCar(product);
                    this.flashMessage.show({
                        status: "info",
                        title: "購物車通知",
                        message:
                            this.ProductList[index].name + "  已加入購物車",
                        time: 3000
                    });
                } catch (error) {
                    console.log(error);
                }
                this.$store.dispatch("LoadShopCar");
            } else {
                this.flashMessage.show({
                    status: "error",
                    title: "購物車通知",
                    message: "請登入會員",
                    time: 3000
                });
            }
        },
        CheackBuyNumber(index, Max) {
            if (this.ProductList[index].BuyNumber > Max) {
                this.ProductList[index].BuyNumber = Max;
            } else if (
                this.ProductList[index].BuyNumber < 0 ||
                this.ProductList[index].BuyNumber == ""
            ) {
                this.ProductList[index].BuyNumber = 0;
            }
        },
        CountBuyNumber(index, number, Max) {
            this.ProductList[index].BuyNumber += number;

            this.CheackBuyNumber(index, Max);
        },

        LoadProduct: async function() {
            try {
                const res = await product_serveice.LoadProduct();
                this.ProductList = res.data;
                this.ProductList.forEach(element => {
                    this.$set(element, "BuyNumber", 0);
                });
            } catch (error) {
                console.log(error);
            }
        }
    },
    watch: {}
};
</script>
<style>
.img_size {
    max-width: 300px;
    max-height: 200px;
}
.img_size img {
    width: 100%;
    height: 100%;
}
</style>
