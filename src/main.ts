import App from "./app/App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "@/theme/vuetify";
import router from "@/app/router";

const app = createApp(App);

app.use(createPinia());

app.use(vuetify);

app.use(router);

app.mount("#app");
