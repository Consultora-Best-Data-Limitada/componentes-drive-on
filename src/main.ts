import { createApp } from "vue";
import App from "./App.vue";

import "./assets/fonts/metropolis/metropolis.css";

import { componentesDriveOn } from "./";

const app = createApp(App);
app.use(componentesDriveOn);
app.mount("#app");
