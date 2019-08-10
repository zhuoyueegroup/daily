<template>
  <div class="person-container">
    <!-- 头部 -->
    <header>
      <p class="p">Hi,欢迎来到卓越手机商城</p>
      <van-button round type="default" class="login-button" :to="{name:'login'}" >登录/注册</van-button>
    </header>
    <!-- 内容区域 -->
    <section>
      <van-cell class="settings" title="我的订单"  icon="bill" is-link to="index" />

      <van-grid :column-num="4" class="tools">
        <van-grid-item
          icon="clock"
          text="待收货"
          to="/"
        />
        <van-grid-item
          icon="cart"
          text="已收货"
          to="/"
        />
        <van-grid-item
          icon="coupon"
          text="评价"
          to="/"
        />
        <van-grid-item  icon="chat"
          text="售后"
          to="/"
        />
      </van-grid>

      <van-cell class="settings" title="优惠券"  icon="gift-card" is-link to="index" />
      <van-cell class="settings" title="钱包"  icon="card" is-link to="index" />
      <van-cell class="settings" title="设置"  icon="setting" is-link to="index" />
      <van-button type="warning" size="normal" round class="exit" >退出账户</van-button>
    </section>

    <!-- 底部导航 -->
    <TabBar :active="4"></TabBar>
  </div>
</template>
<script>
import TabBar from "../tabbar/TabBar";
import Login from '../login/Login'
export default {
  components: {
    TabBar
  }
};
</script>
<style lang="less" scoped>
header{
  background-color: #ff8a5c;
  overflow: hidden;
  height: 300px;

  .p {
    width:100%;
    line-height: 80px;
    color: #fff;
    text-align: center;
    margin:100px auto 10px;
  }

  .login-button {
    width: 25%;
    height: 70px;;
    border-radius: 35px;
    background-color: #badfdb;
    font-size: 30px;
    color: #000;
    padding: 0;
    text-align: center;
    margin: auto 38%;
  }
}
.person-container{
  section{
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .tools{
      width: 100%;
      height: 200px;
      // display: none;

    }
    .settings{

      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      border-bottom: 1px solid #e4e4e4;
      // line-height: 100px;
      // font-weight: bold;
      i{
        font-size: 50px;
        margin-right: 20px;
        color: pink;
      }
    }
    .exit{
      margin-top: 50px;
      width: 550px;
      height: 100px;
      // margin: 20px 30px 30px 0;
      // padding: 20px
    }
  }
}
</style>
