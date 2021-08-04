<template>
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between">
            <i class="fas fa-table me-1"></i>
            產品管理
            <button
                type="button"
                class="btn btn-primary"
                @click="ShowCreateModal"
            >
                新增產品
            </button>
        </div>
        <div class="card-body">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">產品</th>
                        <th scope="col">價格</th>
                        <th scope="col">數量</th>
                        <th scope="col">圖片</th>
                        <th scope="col">操作</th>
                    </tr>
                </thead>
                <tbody v-for="(item, index) in ProductList" :key="index">
                    <tr>
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.picture_path }}</td>
                        <td>
                            <div
                                class="btn-group"
                                role="group"
                                aria-label="Basic example"
                            >
                                <button
                                    type="button"
                                    class="btn btn-success"
                                    @click="ShowEditModal(index)"
                                >
                                    更新
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    @click="DeleteProduct(index)"
                                >
                                    刪除
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Modal -->
        <div
            class="modal fade"
            id="CreateModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            建立商品
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <main>
                            <div class="row justify-content-center ">
                                <div class="card-body">
                                    <form @submit.prevent="CreateProduct">
                                        <div class="form-floating mb-3">
                                            <input
                                                class="form-control"
                                                id="ProductName"
                                                type="text"
                                                placeholder="name@example.com"
                                                v-model.trim="productdata.name"
                                            />
                                            <label for="ProductName"
                                                >產品名稱</label
                                            >
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input
                                                class="form-control"
                                                id="ProductPrice"
                                                type="number"
                                                min="0"
                                                max="10000"
                                                v-model.number="
                                                    productdata.price
                                                "
                                            />
                                            <label for="ProductPrice"
                                                >價格</label
                                            >
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input
                                                class="form-control"
                                                id="ProductQuantity"
                                                type="number"
                                                min="0"
                                                max="999"
                                                v-model.number="
                                                    productdata.quantity
                                                "
                                            />
                                            <label for="ProductQuantity"
                                                >數量</label
                                            >
                                        </div>

                                        <div
                                            class="d-flex align-items-center justify-content-end mt-4 mb-0"
                                        >
                                            <div>
                                                <button
                                                    class="btn btn-primary"
                                                    data-dismiss="modal"
                                                    @click="ClearData"
                                                >
                                                    取消
                                                </button>
                                                <button
                                                    class="btn btn-primary"
                                                    type="submit"
                                                >
                                                    建立
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as product_serveice from "../../serveices/product_serveice";

export default {
    data() {
        return {
            ProductList: [],
            productdata: {
                name: "",
                price: 0,
                quantity: 0
            },
            edit: false,
            editIndex: 0
        };
    },
    mounted() {
        this.GetUserProduct();
    },
    methods: {
        GetUserProduct: async function() {
            try {
                const res = await product_serveice.GetUserProduct();
                this.ProductList = res.data;
            } catch (error) {
                console.log(error);
            }
        },
        CreateProduct: async function() {
            if (this.edit) {
                try {
                    let index = this.editIndex;
                    const res = await product_serveice.EditProduct(
                        this.ProductList[index].id,
                        this.productdata
                    );
                    this.ProductList.splice(index, 1, res.data);
                } catch (error) {
                    console.log(error);
                }
            } else {
                try {
                    const res = await product_serveice.CreateProduct(
                        this.productdata
                    );
                    this.ProductList.push(res.data);
                } catch (error) {
                    console.log(error);
                }
            }

            this.HideCreateModal();
        },
        EditProduct: async function(index) {
            try {
                const res = await product_serveice.EditProduct(
                    this.ProductList[index].id,
                    this.productdata
                );
                //this.ProductList.splice(index, 1, res.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
            this.HideCreateModal();
        },
        DeleteProduct: async function(index) {
            if (confirm("確定刪除  " + this.ProductList[index].name)) {
                try {
                    const res = await product_serveice.DeleteProduct(
                        this.ProductList[index].id
                    );
                    this.ProductList.splice(index, 1);
                } catch (error) {
                    console.log(error);
                }
            }

            this.HideCreateModal();
        },
        ShowCreateModal() {
            $("#CreateModal").modal("show");
            this.edit = false;
            this.ClearData();
        },
        ShowEditModal(index) {
            $("#CreateModal").modal("show");
            this.productdata.name = this.ProductList[index].name;
            this.productdata.price = this.ProductList[index].price;
            this.productdata.quantity = this.ProductList[index].quantity;
            this.edit = true;
            this.editIndex = index;
        },
        HideCreateModal() {
            $("#CreateModal").modal("hide");
        },
        ClearData() {
            this.productdata.name = "";
            this.productdata.price = 0;
            this.productdata.quantity = 0;
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
</style>
