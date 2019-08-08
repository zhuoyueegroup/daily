<template>
  <div class="person-container">
    <header>
      <p class="p">Hi,欢迎来到卓越手机商城</p>
      <van-button round type="default" class="login-button" :to="{name:'login'}" >登录/注册</van-button>
    </header>
    <section>
      <div>

      </div>
      <img src="" alt="">
    </section>
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
</style>
