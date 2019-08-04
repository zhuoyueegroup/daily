<template>
  <div>
    <van-tabbar route v-model="active">
      <van-tabbar-item name="home" :to="{name:'home'}" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item name="classify" :to="{name:'classify'}"   icon="search">分类</van-tabbar-item>
      <van-tabbar-item name="seckill" :to="{name:'seckill'}"  icon="friends-o">秒杀</van-tabbar-item>
      <van-tabbar-item name="shopping" :to="{name:'shopping'}"  icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item name="person" :to="{name:'person'}"  icon="setting-o">我的</van-tabbar-item>
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
