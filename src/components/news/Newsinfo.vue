<template>
<div class="newsinfo-container">
    <h1 class="title">{{newsinfo.title}}</h1>

<p class="subtitle">
    <span>发表时间:{{newsinfo.add_time|dataFormat}}</span>
    <span>点击:{{newsinfo.click}}次</span>
</p>
<hr>
<!-- 内容 获取直接通过v-html就可以-->
<div class="content" v-html="newsinfo.content">
</div>
<!-- 3.使用评论组件 -->
<!-- 把要使用的id绑定在组件上 -->
<comment-box :id="this.id"></comment-box>

</div>

</template>
<script>
// 1.导入评论组件
import comment from "../subcomponents/comment.vue"

import {Toast} from "mint-ui"
export default{
    data(){
        return {
            // 将url地址中传递的id值挂载在data上
            id:this.$route.params.id,
            newsinfo:[]
        }
    },
    created(){
       this.getNewsInfo();
    }, 
    // 2.定义该组件
    components:{
         "comment-box":comment 
    },
    methods:{
       getNewsInfo(){

            this.$http.get("api/getnew/" + this.id).then(res => {
            if(res.body.status===0){
                 this.newsinfo=res.body.message[0]

            }else{
                   Toast("获取新闻失败！！");
            }
        })
       }

    },
   
}

</script>
<style  lang="less">
.newsinfo-container{
    padding:0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin:15px 0;
        color:red;
    }
    .subtitle{
          font-size:13px;
          color:#226aff;
          display:flex;
          justify-content:space-between;
    }
    .content{
             img{
                 width:100%;
             }
    }
}

</style>