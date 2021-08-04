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
                        <img
                            class="card-img-top"
                            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                            alt="..."
                        />
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
                                <a class="btn btn-outline-dark mt-auto" href="#"
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

export default {
    data() {
        return { ProductList: [] };
    },
    mounted() {
        this.LoadProduct();
    },
    methods: {
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
