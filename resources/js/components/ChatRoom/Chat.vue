<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="card card-deafault">
                    <div class="card-header">訊息</div>
                    <div class="card-body p-0">
                        <ul class="list-unstyled chat-message">
                            <li
                                class="p-2"
                                v-for="(message, index) in messages"
                                :key="index"
                            >
                                <strong>{{ message.user.name }}:</strong>
                                {{ message.message }}
                            </li>
                        </ul>
                    </div>
                    <input
                        @keyup.enter="SendMessage"
                        v-model="inputMessage"
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        placeholder="使用者輸入"
                    />
                </div>
            </div>
            <div class="col-4">
                <div class="card card-deafault">
                    <div class="card-header">
                        使用者
                    </div>
                    <div class="card-body">
                        <ul>
                            <li
                                v-for="(user, index) in users"
                                :key="index"
                                class="py-2"
                            >
                                {{ user.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as Chat_Servercie from "../../serveices/Chat_serveice";

export default {
    data() {
        return {
            user: [],
            messages: [],
            inputMessage: "",
            users: []
        };
    },
    created() {
        this.GetMessage();
        Echo.join("ChatChannel")
            .here(user => {
                this.users = user;
                console.log("here");
            })
            .joining(user => {
                this.users.push(user);
                console.log("joining");
            })
            .leaving(user => {
                console.log("leaving");
                this.users = this.users.filter(users => users.id != user.id);
            })
            .listen("WebSocketEvent", event => {
                console.log(event);
                this.messages.push(event.message);
            });
    },
    mounted() {
        //console.log(this.$store.state.user.user);
    },
    methods: {
        SendMessage: async function() {
            try {
                const res = await Chat_Servercie.SendMessage(this.inputMessage);
                /*
               this.messages.push({
                    user: this.$store.state.user.user,
                    message: this.inputMessage
                });
                */
                this.inputMessage = "";
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        },
        GetMessage: async function() {
            try {
                const res = await Chat_Servercie.GetMessage();
                this.messages = res.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>
<style>
.chat-message {
    height: 300px;
    overflow: scroll;
}
</style>
