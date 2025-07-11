import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { createRouter, createWebHistory } from 'vue-router';
import Todos from './components/Todos.vue';
import About from './components/About.vue';

Amplify.configure(outputs);

const routes = [
  { path: '/', component: Todos },
  { path: '/about', component: About }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
