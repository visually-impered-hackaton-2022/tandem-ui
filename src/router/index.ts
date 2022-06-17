import SettingsView from "@/views/Settings.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddPersonView from "@/views/AddPersonView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import Login from "@/types/Login";
import store from "@/store/index";

function isAuthenticated() {
  let user = store.state.login as Login;
  console.log("User auth:");
  console.log(user);
  return Object.keys(user).length !== 0;
  
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/add",
    name: "add",
    component: AddPersonView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && to.name !== 'register' && to.name !== 'settings' && !isAuthenticated()) next({ name: 'login' })
  else next()
});

export default router;
