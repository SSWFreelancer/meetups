import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MeetUp from "../views/MeetUp.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/meetup/:id",
    name: "meetup",
    component: MeetUp,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
