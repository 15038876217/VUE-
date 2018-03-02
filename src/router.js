import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import User from "./components/tabbar/UserContainer.vue"
import Home from "./components/tabbar/HomeContainer.vue"
import Shopcar from "./components/tabbar/ShopcarContainer.vue"
import Search from "./components/tabbar/SearchContainer.vue"
import News from "./components/news/NewsList.vue"
import NewsInfo from "./components/news/Newsinfo.vue"
import Share from "./components/photo/share.vue"
import photoInfo from "./components/photo/info.vue"
import GoodsList  from "./components/goods/GoodList.vue"
import GoodsInfo from "./components/goods/GoodsInfo.vue"
import GoodsDesc from "./components/goods/GoodsDesc.vue"
import GoodsComment from "./components/goods/GoodsComment.vue"



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/user",component:User},
    {path:"/shopcar",component:Shopcar},
    {path:"/search",component:Search},
    {path:"/home/newslist",component:News},
    // 这里当地址中什么都不传时想要到详情页面需要在path配置后加？---/home/newsinfo/:id？
    {path:"/home/newsinfo/:id",component:NewsInfo},
    {path:"/photo/share",component:Share},
    {path:"/photo/info/:id",component:photoInfo},
    {path:"/home/goodslist",component:GoodsList},
    {path:"/goods/goodsinfo/:id",component:GoodsInfo,name:"goodsinfo"},
    {path:"/home/goodsdesc/:id",component:GoodsDesc,name:"goodsdesc"},
    {path:"/home/goodscomment/:id",component:GoodsComment,name:"goodscomment"}
  
  ],
  linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router