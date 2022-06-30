import SettingsView from "@/views/Settings.vue";
import { createRouter, createWebHistory, RouteRecordRaw, RouteParams } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AddPersonView from "@/views/AddPersonView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import CreateEvent from "@/views/CreateEvent.vue";
import AboutView from "@/views/AboutView.vue";
import Login from "@/types/Login";
import store from "@/store/index";

function isAuthenticated() {
  let user = store.state.login as Login;
  console.log("User auth:");
  console.log(user);
  return Object.keys(user).length !== 0;
}


export type AppRouteNames =
  | 'home'
  | 'create-event'
  | 'about'
  | 'login'
  | 'register'
  | 'add-person'


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create-event",
    component: CreateEvent,
  },
  {
    path: "/about",
    name: "about",
    component:AboutView,
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
    name: "add-person",
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

export function routerPush (name: AppRouteNames, params?: RouteParams): ReturnType<typeof router.push> {
  if (params !== undefined) {
    return router.push({
      name,
      params,
    })
  } else {
    return router.push({ name })
  }
}

export default router;
