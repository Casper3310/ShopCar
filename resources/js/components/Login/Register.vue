<template>
    <div>
        <!-- Button trigger modal -->
        <a type="button" class="nav-link" @click="ShowRegisterModal">
            註冊
        </a>

        <!-- Modal -->
        <div
            class="modal fade"
            id="RegisterModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            註冊帳號
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
                                    <div>{{ errors }}</div>
                                    <form @submit.prevent="SubmitRegister">
                                        <div class="form-floating mb-3">
                                            <input
                                                class="form-control"
                                                id="RegisterEmail"
                                                type="email"
                                                placeholder="name@example.com"
                                                v-model.trim="user.email"
                                                required
                                            />
                                            <label for="RegisterEmail"
                                                >輸入Email</label
                                            >
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input
                                                class="form-control"
                                                id="RegisterName"
                                                type="text"
                                                maxlength="10"
                                                minlength="1"
                                                placeholder="name@example.com"
                                                v-model.trim="user.name"
                                                required
                                            />
                                            <label for="RegisterName"
                                                >輸入名稱</label
                                            >
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input
                                                class="form-control"
                                                id="RegisterPassword"
                                                type="password"
                                                placeholder="輸入密碼"
                                                maxlength="12"
                                                minlength="3"
                                                v-model.trim="user.password"
                                                required
                                            />
                                            <label for="RegisterPassword"
                                                >輸入密碼</label
                                            >
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input
                                                class="form-control"
                                                id="password_confirmation"
                                                type="password"
                                                placeholder="再次輸入密碼"
                                                maxlength="12"
                                                minlength="3"
                                                v-model.trim="
                                                    user.password_confirmation
                                                "
                                                required
                                            />
                                            <label for="password_confirmation"
                                                >確認密碼</label
                                            >
                                        </div>

                                        <div
                                            class="d-flex align-items-center justify-content-end mt-4 mb-0"
                                        >
                                            <div>
                                                <button
                                                    class="btn btn-secondary"
                                                    data-dismiss="modal"
                                                    @click="ClearData"
                                                >
                                                    取消
                                                </button>
                                                <button
                                                    type="submit"
                                                    class="btn btn-primary"
                                                >
                                                    註冊
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
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errors: ""
        };
    },
    methods: {
        SubmitRegister: async function() {
            if (this.user.password != this.user.password_confirmation) {
                this.errors = "密碼不相同";
                this.user.password = "";
                this.user.password_confirmation = "";
                return;
            }
            try {
                const res = await Login_Servercie.Register(this.user);
            } catch (error) {
                console.log(error);
            }

            this.HideRegisterModal();
        },
        ClearData() {
            this.user.name = "";
            this.user.email = "";
            this.user.password = "";
            this.user.password_confirmation = "";
            this.errors = "";
        },
        ShowRegisterModal() {
            $("#RegisterModal").modal("show");
            this.ClearData();
        },
        HideRegisterModal() {
            $("#RegisterModal").modal("hide");
        }
    }
};
</script>
