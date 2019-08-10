<template>
  <div>
    <!-- 轮播图区域 -->
    <swiper class="swiper"></swiper>
    <!-- 信息区域 -->
    <van-panel class="panel" title="小米7" desc="小末7017感恩车来啦！本打能机稀人立减10n元，">
      <div class="panel-content">Y1599</div>
    </van-panel>

    <!-- 底部支付栏 -->
    <van-goods-action class="pay">
      <van-goods-action-icon
        icon="chat-o"
        text="客服"
        @click="onClickIcon"
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :to="{name:'shopping'}"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickButton"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        :to="{name:'settle'}"
      />
    </van-goods-action>
  </div>
</template>

<script>
import Swiper from '../commoncomponents/Swiper';
export default {
  methods: {
   onClickIcon() {
      alert('点击图标');
    },
    onClickButton() {
      alert('点击按钮');
    }
  },
  components: {
    Swiper
  }
}
</script>


<style lang="less" scoped>
.swiper{
  // width: 400px;
  height: 750px;
}
.panel{
  height: 100px;
  margin-bottom: 100px;
  line-height: 100px;
  .van-cell__label{
    margin: 25px 0;
  }
  .panel-content{
    margin-top: 150px;
    line-height: 100px;
    color: orange;
    font-weight: bold;
  }
}

.pay{
  // width: 80px;
  height: 100px;
  // background: pink;
  // position: relative;
  .van-goods-action-icon,.van-goods-action-button{
    width: 100px;
    height: 80px;
    // line-height: 80px;
  }
}
</style>
