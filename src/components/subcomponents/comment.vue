<template>
<div class="cmt-container">
    <h1>发表评论</h1>
<hr>
<textarea placeholder="请输入评论内容（最多120字）"></textarea>

<mt-button type="primary" size="large">发表评论</mt-button>
<div class="cmt-list">
         <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_item">
             <div class="cmt-title">
                 第{{i+1}}楼&nbsp;&nbsp; 用户：{{item.user_name}}&nbsp;&nbsp; 发表时间：{{item.add_item|dataFormat}}
             </div>
             <div class="cmt-body">{{item.content==="undefined"?"真懒":item.content}}</div>
         </div>


</div>



<mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
</div>

</template>
<script>
import {Toast} from "mint-ui"
  export default{
      data(){
          return {
              pageIndex:1,
              comments:[]
          }
      },
    //   父组件向子组件传值，子组件需要定义一下该变量
       props: ["id"],
      created(){
          this.getComments()
      },
      methods:{
            getComments(){
                this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(res=>{
                        if(res.body.status==0){
                            // 连接上次的数据
                            this.comments=this.comments.concat(res.body.message);
                        }else{
                                     Toast("获取数据失败");
                        }
                })
            },
            getmore(){
                this.pageIndex++;
                this.getComments();
            }
      }
  }



</script>
<style scoped  lang="less">
.cmt-container{
    h1{
        font-size: 18px;
    }
    textarea{
        font-size:14px;
        height:85px;
        margin:0;
    }
    .cmt-list{
        
        margin:5px 0;
        .cmt-item{
          .cmt-title{
              line-height: 30px;
              background-color: #ccc;
          }
          .cmt-body{
              line-height: 35px;
              text-indent: 2em;
          }  
        }
    }
}
</style>