// 入口文件
import Vue from "vue"

// 头部引入---头部 轮播图 按钮
// import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

// 图片懒加载必须使用全局的mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
// 导入时间插件
import moment from "moment"
// 定义全局的过滤器--必须定义在vue实例之前
Vue.filter("dataFormat",function (dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})
// 导入图片预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview)


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
Vue.http.options.emulateJSON = true;   // 设置post请求为表单方式提交



var vm=new Vue({
    el:"#app",
    render:c=>c(app),
    router    //挂载路由
});