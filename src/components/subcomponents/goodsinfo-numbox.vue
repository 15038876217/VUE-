<template>
<div class="mui-numbox" data-numbox-min='1'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1"
                    @change="countChanged" ref="numbox" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js"
export default{
    data(){
   return{
          
         }
    },
    mounted(){
        //  初始化数字选择框组件
        mui(".mui-numbox").numbox()
    },
    methods:{
        countChanged(){
        //   console.log(this.$ref.numbox.value);
          this.$emit("getcount",parseInt(this.$refs.numbox.value));
          
        }
        
    },
    props:["max"],
    watch:{
        // 使用jsAPI实现numbox的最大值
        max:function (newVal,oldVal){
            console.log(newVal);
                   mui(".mui-numbox").numbox().setOption("max",newVal);

        }
    }

}

</script>
<style scoped  lang="less">
</style>