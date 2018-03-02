<template>
<div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
     <p class="subtitle">
         <span>发表时间:{{photoinfo.add_time|dataFormat}}</span>
         <span>点击:{{photoinfo.click}}次</span>
     </p>
     <hr>
     <div class="thumbs">
          <img class="preview-img"
                  v-for="(item, index) in photoinfo"
                  :key="index"
                  :src="item.src" height="100" 
                  @click="$preview.open(index, photoinfo)">
     </div>
     <!-- 缩略图区域 -->
     <!-- 图片内容区域 -->
     <div class="content" v-html="photoinfo.content"> </div>

     <!-- 放置一个现成的皮评论子组件 -->
  <comment-box :id="id"></comment-box>
</div>

</template>
<script>
// 导入评论子组件
import comment from "../subcomponents/comment.vue"
export default{
    data(){
        return{
                 id:this.$route.params.id,
                 photoinfo:{},//图片详情
                 list:[]
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods:{
          getPhotoInfo(){
             this.$http.get("api/getimageInfo/"+this.id).then(res=>{
                 if(res.body.status===0){
                         this.photoinfo=res.body.message[0];
                          console.log(this.photoinfo);
                 }
             })  
          },
          getThumbs(){
                this.$http.get("api/getthumimages/"+this.id)
              .then(res=>{
                  if(res.body.status===0){
                    //   循环每个图片数据补全宽和高
                              res.body.message.forEach(function (item){
                                  item.w=600;
                                  item.h=400;
                              })
                              this.photoinfo=res.body.message;
                             
                  }
              })


}
    },
// 2.定义该组件
    components:{
         "comment-box":comment 
    },
}

 
</script>
<style scoped  lang="scss">
.photoinfo-container{
    padding:3px;
    h3{
        color:#26A2FF;
         font-size: 15px;
         text-align: center;
         margin:15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size:13px;

    }
    .content{
        font-size:13px;
        line-height: 30px; 
    }
    .thumbs{
        margin:10px;
        box-shadow: 0 0 8px #999;
         .preview-img{
        margin:10px;
    }
     }
   
}



</style>