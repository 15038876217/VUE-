<template>
  <div class="box">
    <!-- 顶部 -->
        <mt-header fixed title="VUE项目学习"></mt-header>
     <!-- 路由区域  中间页面渲染 -->
      <!-- 动画过渡 -->
	 <transition>
			<router-view></router-view>
		</transition>

      <!-- tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-user" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-user" to="/user">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">用户</span>
			</router-link>
			<router-link class="mui-tab-item-user" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-user" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
// 解决滑动不会覆盖
.mint-header{
  z-index: 99;
}
a:hover,
a:focus {
  text-decoration: none;
}
.box{
  padding-top:40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
// 中间组件--动画设置
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-to{
	transition: all 0.5s ease;
}

.mui-bar-tab .mui-tab-item-user {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-user.mui-active{
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-user .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-user .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}


</style>
