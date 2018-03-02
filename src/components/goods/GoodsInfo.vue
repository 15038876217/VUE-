<template>



<div class="goodsinfo-container">
   <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
         <div class="ball" v-show=" ballFlag" ref="ball"></div>
   </transition>
  
   <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
        <swiper :imgData="lunbotu" :isfull="false"></swiper>

        </div>
      </div>
    </div>

    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <!--内容区-->
      <div class="mui-card-content">
           <div class="mui-card-content-inner">
                <p class="price">
                     市场价:<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now-price">￥{{goodsinfo.sell_price}}</span>
                    </p>   
           <p>购买数量:
            <numbox @getcount="getSelectedCount"
            :max="goodsinfo.stock_quantity"
            ></numbox>
           </p>
           <p>
               <mt-button type="primary" size="small">立即购买</mt-button>
               <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
           </p>


        </div>
      </div>
    </div>

    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">商品参数</div>
      <!--内容区-->
      <div class="mui-card-content">
 <div class="mui-card-content-inner">
            <p>商品货号：{{goodsinfo.goods_no}}</p>
            <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
            <p>上架时间：{{goodsinfo.add_time|dataFormat}}</p>
 </div>

      </div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">
            <mt-button type="primary" plain size="large" @click="goDesc(id)">图文介绍</mt-button>
               <mt-button type="danger" plain size="large" @click="goComment(id)">商品评论</mt-button>
                    
      </div>
    </div>


</div>

</template>
<script>
// 导入数量购买
import numbox from "../subcomponents/goodsinfo-numbox.vue"
// 1.导入轮播图
import swiper from "../subcomponents/swiper.vue"
export default{
    data(){
        return {
              id:this.$route.params.id,
              lunbotu:[],
              goodsinfo:{},
              ballFlag:false,
              selectedCount:1
        }
    },
    created(){
         this.getLunbotu(),
         this.getGoodsInfo()
    },
    methods:{
        getLunbotu(){
           this.$http.get('api/getthumimages/'+this.id).then(res=>{
               if(res.body.status===0){
                //   先循环轮播图数组的每一项，为item添加img属性，因为轮播图组件中，只认识item.img,不认识item.src
                   res.body.message.forEach(item=>{
                      item.img=item.src;
                    })
                     this.lunbotu=res.body.message;
               }
           })
        },
        getGoodsInfo(){
            // 获取商品信息
            this.$http.get("api/goods/getinfo/" + this.id).then(res=>{
                  if(res.body.status===0){
                      this.goodsinfo=res.body.message[0];
                  }


            })
        },
        // 点击进入图文介绍----编程式导航
          goDesc(id){
              this.$router.push({name:"goodsdesc",params:{id}});
          },
        //   点击进入评论页面
          goComment(id){
               this.$router.push({name:"goodscomment",params:{id}});

          },
          addToShopCar(){
              this.ballFlag=!this.ballFlag;

          },
          beforeEnter(el){
              el.style.transform="translate(0,0)"
          },
          enter(el,done){
             el.offsetWidth;

        let ballP = this.$refs.ball.getBoundingClientRect();
      let badgeP = document.getElementById('badge').getBoundingClientRect();

      let left = badgeP.left - ballP.left;
      let top = badgeP.top - ballP.top;

             el.style.transform=`translate(${left}px,${top}px)`
              el.style.transtion="all 1s ease"
              done()
            },
          afterEnter(el){
            this.ballFlag=!this.ballFlag;
          },
          getSelectedCount(count){
             this.selectedCount=count;
            //  console.log("获取子组件传的值："+this.selectedCount)
          }


    },
    components:{
        swiper,
        numbox
    }

}

</script>
<style scoped  lang="scss">
.goodsinfo-container{
    background-color: #eee;
    // 解决塌陷
    overflow: hidden;
    min-height: 500px;
.now-price{
    color:red;
    font-size: 16px;
    font-weight: 700;
}
// 竖直排列
.mui-card-footer{
    display: block;
     button{
         margin:15px 0;
     }
}
.ball{
    width:15px;
    height:15px;
    border-radius: 50%;
    z-index:99;
    background-color:red;
    position: absolute;
    left:142px;
  top:381px;
//   transform: translate(88px,230px)
}

}



</style>