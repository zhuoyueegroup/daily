<template>
  <div>
    <div class="login-title">登录</div>
    <van-cell-group class="cell-group">
      <van-field class="username" v-model="username" label="账号 ：" label-width="100px"  placeholder="请输入账号" />
      <van-field class="password" v-model="password" label="密码 ：" label-width="100px" type="password" placeholder="请输入密码" />
      <div class="picture-container">
        <van-field class="picture" v-model="picture"  type="password" label="图片验证 ：" label-width="100px"  placeholder="请输入图片验证码"  /><van-icon name="replay" />
        <van-image class="verify"   fit="contain"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLArA6eauczsbARwQksN9PDMetWirpsKV7mgl-1gC2odpAfypsrA"/>
      </div>
    </van-cell-group>
    <van-button class="login-button" type="primary" size="large" :to="{name:'home'}" >登录</van-button>
    <router-link  to="/register"><p class="p-register">还没有账号？请注册></p></router-link>
  </div>
</template>
<script>
import Register from '../login/Register'
export default {
  data() {
    return {
      username: "",
      password: "",
      picture:""
    };
  }
};
</script>
<style lang="less" scoped>
  .login-title{
    width: 100%;
    line-height: 400px;
    text-align: center;
    font-size: 60px;

  }
  .cell-group{
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    padding: 0 60px;

    .username,.password,.picture{
      width: 100%;
      height: 100px;
      font-size: 36px;
      padding-top: 40px;
      margin-top: 20px;
      border-bottom:0.2px solid #ccc;
    }

    .picture-container{
      display: flex;
      align-items: center;
    }
    .verify{
      width: 200px;
      height: 100px;
      padding: 0px;
    }
  }
  .login-button{
    width: 90%;
    height: 100px;
    font-size: 50px;
    border-radius: 15px;
    margin:80px 5% 0;
  }
  .p-register{
    text-align: right;
  }
</style>
