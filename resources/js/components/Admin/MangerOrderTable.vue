<template>
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-center">
            <i class="fas fa-table me-1"></i>
            目前訂單
        </div>
        <div class="card-body">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">買家</th>
                        <th scope="col">打折等級</th>
                        <th scope="col">商品</th>
                        <th scope="col">價格</th>
                        <th scope="col">數量</th>
                        <th scope="col">總價格</th>
                        <th scope="col">商品圖片</th>
                        <th scope="col">操作</th>
                        <th scope="col">是否付費</th>
                    </tr>
                </thead>
                <tbody v-for="(item, index) in OrderList" :key="index">
                    <tr>
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.user.name }}</td>
                        <td>{{ item.user.level }}</td>
                        <td>{{ item.product.name }}</td>
                        <td>{{ item.product.price }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.price }}</td>
                        <td class="img_size_ls">
                            <img
                                :src="
                                    `${$store.state.serverPath}storage/${item.product.picture_path}`
                                "
                                alt=""
                            />
                        </td>
                        <td>
                            <div
                                class="btn-group"
                                role="group"
                                aria-label="Basic example"
                            >
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    @click="DeleteOrder(index)"
                                >
                                    刪除
                                </button>
                            </div>
                        </td>
                        <td>
                            <i class="fas fa-check" v-if="item.Shipment"></i>
                            <i class="fas fa-times" v-else></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import * as order_serveice from "../../serveices/order_serveice";

export default {
    data() {
        return {
            OrderList: [],
            CancleOrderList: []
        };
    },
    mounted() {
        this.LoadOrder();
        this.LoadCancelOrder();
    },
    methods: {
        LoadOrder: async function() {
            try {
                const res = await order_serveice.LoadOrder();
                this.OrderList = res.data;
            } catch (error) {
                console.log(error);
            }
        },
        LoadCancelOrder: async function() {
            try {
                const res = await order_serveice.LoadCancelOrder();
                this.CancleOrderList = res.data;
            } catch (error) {
                console.log(error);
            }
        },
        DeleteOrder: async function(index) {
            if (confirm("確定刪除訂單?")) {
                try {
                    const res = await order_serveice.DeleteOrder(
                        this.OrderList[index].id
                    );
                    console.log(res);
                    this.OrderList.splice(index, 1);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },
    watch: {}
};
</script>
<style>
.table thead tr th {
    text-align: center;
}
.table tbody tr td {
    text-align: center;
}
.img_size_ls {
    max-width: 50px;
    max-height: 25px;
}
.img_size img {
    width: 100%;
    height: 100%;
}
</style>
