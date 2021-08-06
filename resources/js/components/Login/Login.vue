<template>
    <div>
        <!-- Button trigger modal -->
        <a type="button" class="nav-link" @click="ShowLoginModal">
            登入
        </a>

        <!-- Modal -->
        <div
            class="modal fade"
            id="LoginModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            登入
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
                                    <form @submit.prevent="SubmitLogin">
                                        <div class="form-floating mb-3">
                                            <input
                                                class="form-control"
                                                id="LoginEmail"
                                                type="email"
                                                placeholder="name@example.com"
                                                v-model="user.email"
                                            />
                                            <label for="LoginEmail"
                                                >登入Email</label
                                            >
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input
                                                class="form-control"
                                                id="LoginPassword"
                                                type="password"
                                                placeholder="Password"
                                                v-model="user.password"
                                            />
                                            <label for="LoginPassword"
                                                >密碼</label
                                            >
                                        </div>
                                        <div class="form-check mb-3">
                                            <input
                                                class="form-check-input"
                                                id="inputRememberPassword"
                                                type="checkbox"
                                                value=""
                                            />
                                            <label
                                                class="form-check-label"
                                                for="inputRememberPassword"
                                                >記住我</label
                                            >
                                        </div>
                                        <div
                                            class="d-flex align-items-center justify-content-between mt-4 mb-0"
                                        >
                                            <button
                                                class="btn btn-primary"
                                                href="password.html"
                                            >
                                                忘記密碼
                                            </button>
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
                                                    登入
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
import * as Login_Servercie from "../../serveices/Login_serveice";

export default {
    data() {
        return {
            user: {
                email: "",
                password: ""
            },
            errors: ""
        };
    },
    methods: {
        SubmitLogin: async function() {
            try {
                const res = await Login_Servercie.Login(this.user);
                this.$store.commit("Login", res.data);
            } catch (error) {
                console.log(error);
            }
            this.HideLoginModal();
            this.$store.dispatch("LoadShopCar");
        },
        ClearData() {
            this.user.email = "";
            this.user.password = "";
            this.errors = "";
        },
        ShowLoginModal() {
            $("#LoginModal").modal("show");
            this.ClearData();
        },
        HideLoginModal() {
            $("#LoginModal").modal("hide");
        }
    }
};
</script>
