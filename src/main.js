// 入口文件
import Vue from "vue"

// 头部引入
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


// 引入底部css
import "./lib/mui/css/mui.min.css"
// 引入购物车图标（拓展图标）
import "./lib/mui/css/icons-extra.css"

import app from "./App.vue"
import router from "./router.js"

// 轮播图---发送请求
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root = 'http://vue.studyit.io'; // 设置请求路径前缀
var vm=new Vue({
    el:"#app",
    render:c=>c(app),
    router    //挂载路由
});