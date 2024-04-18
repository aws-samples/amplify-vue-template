import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";

Amplify.configure(config);

createApp(App).mount("#app");
