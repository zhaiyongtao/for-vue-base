import { createApp } from "vue";
import { createPinia } from "pinia";
import Lego from "@nio-fe/lego";
import "@nio-fe/lego/lib/style.css";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Lego);

app.mount("#app");
