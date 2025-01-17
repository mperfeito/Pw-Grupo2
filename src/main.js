import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersistedState from "pinia-plugin-persistedstate"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
pinia.use(piniaPersistedState);
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
