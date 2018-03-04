

// 入口文件
import Vue from "vue"
// 利用vuex解决共享数据问题（非父子组件传值问题）
import Vuex from "vuex"
Vue.use(Vuex)
// 每次刚进入网站，肯定会调用main.js在刚调用的时候先从本地存储中把购物车数据读取出来放到store中
var car=JSON.parse(localStorage.getItem("car")||"[]")

var store=new Vuex.Store({
    state:{ //this.$store.state.***
             car:car//存储商品的对象
    },
    mutations:{//this.$store.commit("方法的名称"，"按需传递唯一的参数")
       addToCar(state,goodsinfo){
           var flag=false;
        //    点击加入保存商品信息到car上
            state.car.some(item=>{
                if(item.id==goodsinfo.id){

                    item.count+=parseInt(goodsinfo.count);
                     flag=true;
                    return true
                }
            }) 
            if(!flag){
               state.car.push(goodsinfo);
            }
// 当更新car数据之后，把car数组存储到本地localstorage中---实现商品数据的持久化存储
localStorage.setItem("car",JSON.stringify(state.car))
       },
    //  修改购物车商品的数量值
    updateGoodsInfo(state,goodsinfo){
        state.car.some(item=>{
            if(item.id==goodsinfo.id){
                    item.count=parseInt(goodsinfo.count)
                    return true;
            }
        })
        localStorage.setItem("car",JSON.stringify(state.car))
    },
    removeFormCar(state,id){
          state.car.some((item,i)=>{
               if(item.id==id){
                    state.car.splice(i,1);
                    return true;
               }
          })
          localStorage.setItem("car",JSON.stringify(state.car))
    },
    updateGoodsSelected(state,info){
               state.car.some(item=>{
                   if(item.id==info.id){
                        item.selected=info.selected;
                   }
               })
               localStorage.setItem("car",JSON.stringify(state.car))   
    }
    },
    getters:{//this.$store.getters.***--相当于计算属性
        getAllCount(state){
              var c=0;
              state.car.forEach(item=>{
                  c+=item.count
              })
              return c;
        },
        getGoodsCount(state){
              var o={}
              state.car.forEach(item=>{
                  o[item.id]=item.count
              })
              return o;

        },
        getGoodsSelected(state){
            var o={}
            state.car.forEach(item=>{
                o[item.id]=item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
              var o={
                  count:0,
                  amount:0
              }
              state.car.forEach(item=>{
                  if(item.selected){
                              o.count+=item.count;
                           o.amount+=item.price*item.count;   
                  }
              })
              return o;
        }

    }
});






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
    router ,   //挂载路由
    store
});