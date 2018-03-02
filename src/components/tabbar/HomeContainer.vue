<template>
<div>
    <!-- 3.引入组件-轮播图 -->
   <swiper :imgData="imgData" :isfull="true"></swiper>

           <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                 <img src="../../imgs/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                            </router-link ></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/share">
		                    <img src="../../imgs/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                            </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <!-- <router-link to="/home/goodslist"> -->
                  <router-link to="/home/goodslist">
                  
		                    <img src="../../imgs/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div>

                        </router-link>
                  <!-- </router-link> -->
                  </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../imgs/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../imgs/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../imgs/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
</div>

</template>
<script>

import {Toast} from "mint-ui"
// 1.导入轮播图
import swiper from "../subcomponents/swiper.vue"
export default{
    data(){
        return {
            imgData:[]
        }
    },
    created(){
        this.getImgData()
    },
    methods:{
        getImgData(){
             this.$http.get("api/getlunbo").then((res)=>{
                    if(res.body.status===0){
                            this.imgData=res.body.message;
                    }else{
                             Toast("请求数据失败")
                    }
             })
        }
    },
    // 2.定义组件
    components:{
      swiper
    }
}


</script>
<style scoped  lang="less">



.mui-grid-view.mui-grid-9{
  border:0;
  background: #fff;
}
.mui-grid-view.mui-grid-9 .mui-media{
  background: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:0;
  img{
    width:60px;
    height:60px;
  }
}

.mui-media-body{
    font-size:14px;
}




</style>