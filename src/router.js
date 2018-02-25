import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import User from "./components/tabbar/UserContainer.vue"
import Home from "./components/tabbar/HomeContainer.vue"
import Shopcar from "./components/tabbar/ShopcarContainer.vue"
import Search from "./components/tabbar/SearchContainer.vue"

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/user",component:User},
    {path:"/shopcar",component:Shopcar},
    {path:"/search",component:Search}
  ],
  linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router