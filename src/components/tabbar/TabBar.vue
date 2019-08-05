<template>
  <div class="tabbar-container">
    <van-tabbar route v-model="active" border class="tabbar">
      <van-tabbar-item name="home" :to="{name:'home'}" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item name="classify" :to="{name:'classify'}"   icon="more-o">分类</van-tabbar-item>
      <van-tabbar-item name="seckill" :to="{name:'seckill'}"  icon="hot-o">秒杀</van-tabbar-item>
      <van-tabbar-item name="shopping" :to="{name:'shopping'}"  icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item name="person" :to="{name:'person'}"  icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar-container{
  .tabbar{
    height: 100px;
    // background-color: pink;
  }
}
</style>

