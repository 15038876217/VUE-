<template>
<div class="goods-list">
<!-- <router-link
v-for="item in goodslist"
 class="goods-item" :to="'/goods/goodsinfo/'+item.id" :key="item.id" tag="div">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>
 <mt-button type="danger" size="large" @click="addmore">
      加载更多
    </mt-button> -->


    <div
     v-for="item in goodslist"
    class="goods-item" 
     :key="item.id"
      @click="goInfo(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="addmore">
      加载更多
    </mt-button>
  </div>

</template>
<script>
  export default {
      data(){
          return {
                  pageindex:1,
                  goodslist:[]
          }
      },
    
      methods:{
          getGoodsList(){
              this.$http.get('api/getgoods?pageindex=' + this.pageindex).then(res=>{
                  if(res.body.status===0){
                         this.goodslist=this.goodslist.concat(res.body.message);
                  }
              });
          },
          addmore(){
              this.pageindex++;
              this.getGoodsList();
          },
    
         goInfo(id){
              this.$router.push('/goods/goodsinfo/'+id)
         } 
      },
      
        created(){
          this.getGoodsList();
          
      }}
  
</script>
<style scoped  lang="less">
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
      min-height: 42px;
    }

    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}



</style>