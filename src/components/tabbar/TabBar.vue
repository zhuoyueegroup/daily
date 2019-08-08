<template>
  <div class="tabbar-container">
    <van-tabbar  class="tabbar"   v-model="index">
      <van-tabbar-item  :to="{name:'home'}" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item  :to="{name:'classify'}"   icon="more-o">分类</van-tabbar-item>
      <van-tabbar-item  :to="{name:'seckill'}"  icon="hot-o">秒杀</van-tabbar-item>
      <van-tabbar-item  :to="{name:'shopping'}"  icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item  :to="{name:'person'}"  icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>



  </div>
</template>

<script>

export default {
  props:['active'],
  data () {
    return {
      qaq:0,
    }
  },
  computed: {
    index:{
      get(){
        return this.active
      },
      set(){}
    }
  }

}
</script>

<style lang="less" scoped>
.tabbar-container{
  .tabbar{
    height: 100px;
    .van-tabbar-item--active{
      color:orange
    }
    // color: blue;
    // background-color: pink;
  }
}

</style>

