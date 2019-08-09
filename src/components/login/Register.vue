<template>
  <div>
    <div class="register-title">注册</div>
    <van-cell-group class="cell-group">
      <van-field class="phone" v-model="phone"  label="手机号：" label-width="80px"  placeholder="+86" />

      <div class="picture-container">
        <van-field class="picture" v-model="picture"    type="password" label="图片验证：" placeholder="请输入图片验证码" label-width="80px" /><van-icon name="replay" />
        <van-image class="verify"   fit="contain"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KFWOoxwsY8i0Gnuu4WaNQLCBiFgQ0YG_VMmtFw0IWIeXfgJa"/>
      </div>
       <van-field class="password" v-model="password"  label="设置密码 :"  label-width="80px"  type="password" placeholder="设置6~16位密码" />
      <van-field class="message" v-model="message"   label="手机验证 :"  placeholder="请输入验证码" label-width="90px" >
        <van-button class="send-button" slot="button" size="small" type="primary">发送验证码</van-button></van-field>
    </van-cell-group>
    <van-button class="register-button" type="primary" size="large" :to="{name:'home'}">注册</van-button>
    <router-link to="/login"><p class="p-register">已有账号？请登录></p></router-link>

  </div>
</template>
<script>
export default {

  data() {
    return {
      phone: "",
      password: "",
      picture:"",
      message:" "
    };
  }
};
</script>
<style lang="less" scoped>
  .register-title{
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

    .phone,.password,.picture,.message{
      width: 100%;
      line-height: 80px;
      box-sizing: border-box;
      font-size: 36px;
       margin-top: 30px;
      border-bottom:0.2px solid #ccc;
    }
    .verify{
      width: 200px;
      height: 100px;
      padding: 0px;
    }
    .send-button{
      width: 200px;
      height: 80px;
      font-size:36px;
      text-align: center;
      border-radius: 15px;
      background-color: #9cf196;

    }
    .picture-container{
      display: flex;
      align-items: center;
    }
  }

  .register-button{
    width: 90%;
    height: 100px;
    font-size: 50px;
    border-radius: 15px;
    margin:180px 5% 0;
    background-color: #9cf196;
  }
  .p-register{
    text-align: right
  }
</style>

