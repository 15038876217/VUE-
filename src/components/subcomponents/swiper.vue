<template>
<div>
     <mt-swipe :auto="4000">
         <!-- 将来谁使用轮播图组件谁为我们传递imgData，此时imgData是涉及到父向子组件传值 -->
         <mt-swipe-item v-for="item in imgData" :key="item.img">
             <img :src="item.img" :alt="item.src" :class="{full:isfull}">

         </mt-swipe-item>
     </mt-swipe>
</div>

</template>
<script>
  export default{
      props:["imgData","isfull"]
  }



</script>
<style scoped  lang="less">
.mint-swipe{
  height:30vh;
  .mint-swipe-item{
      text-align: center;
   
    img{
    //   width:100%;
      height:100%;
    }
  }
}
.full{
    width:100%;
}
</style>