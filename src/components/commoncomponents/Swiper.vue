<template>
  <div class="swiper-container">
    <van-swipe :autoplay="3000"  indicator-color="white">
      <van-swipe-item class="swiper-item">1</van-swipe-item>
      <van-swipe-item class="swiper-item">2</van-swipe-item>
      <van-swipe-item class="swiper-item">3</van-swipe-item>
      <van-swipe-item class="swiper-item">4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.swiper-item{
  background-color: pink;
  // width: 1000px;
  // width: 100%;
      line-height:850px;
  // height: 100%;
  // height: 1000px;
}
</style>
