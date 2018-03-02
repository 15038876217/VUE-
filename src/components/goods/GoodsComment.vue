<template>
<div>
   
    <comment-box :id="$route.params.id"></comment-box>
</div>

</template>
<script>
 import comment from "../subcomponents/comment.vue"
export default{
    components:{
        'comment-box':comment
    }
}
</script>
<style scoped  lang="less">
</style>