import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Money from "@/views/Money.vue";
import Labels from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/NotFound.vue"
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/money", //重定向到money
  },
  {
    path: "/money", // 指定了路径
    component: Money, // 指定了内容
  },
  {
    path: "/labels",
    component: Labels,
  },
  {
    path: "/statistics",
    component: Statistics,
  },
  {
    path:'*',
    component:NotFound
  }
];

const router = new VueRouter({
  routes,
});

export default router;
