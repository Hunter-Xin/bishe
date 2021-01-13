import Vue from "vue"
import Router from "vue-router"
import index from "../views/Index.vue"
import login from "../views/login.vue"
Vue.use(Router)

const router = new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
    },
    {
      path: "/index",
      name: "index",
      component: index,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    }
  ],
})

export default router
