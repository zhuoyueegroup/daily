<template>
  <div>
    <div class="register-title">注册</div>
    <form class="form-group">
      <!-- 手机号 -->
      <label for="phone">手&nbsp;机&nbsp;号&nbsp;：</label>
      <input  class="phone"  v-model="userInfo.phone"  placeholder="+86"  @blur="checkUsername"  />
      <br />
      <span class="prompt">{{prompt.prompt1}}</span>
      <br />
      <!-- 密码 -->
      <label for="password">密 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;：</label>
      <input class="password"  v-model="userInfo.password"  placeholder="设置6~16位密码"  @blur="checkPassword" />
      <br />
      <span class="prompt">{{prompt.prompt2}}</span>
      <br />
      <!-- 图片验证 -->
      <div class="picture-container">
        <label for="picture">图片验证：</label>
        <input  class="picture"  v-model="userInfo.identify"  placeholder="请输入图片验证码"  @blur="checkIdentify" />
        <van-icon name="replay" @click="changeCode"/>
        <identify :identifyCode="identifyCode" ></identify>
      </div>
      <span class="prompt">{{prompt.prompt3}}</span>
      
      <br />
    </form>
    <!-- 注册 -->
    <van-button class="register-button" type="primary" size="large" :to="{name:'home'}">注册</van-button>
    <router-link to="/login">
      <p class="p-register">已有账号？请登录></p>
    </router-link>
  </div>
</template>
<script>
import Identify from '../login/Identify.vue';
export default {
  data() {
    return {
      // 验证码初始值
      identifyCode:"1212",
      // 验证码随机取值范围
      identifyCodes:"1234567890",
      isReturn: false,
      userInfo: {
        phone: "",
        password: "",
        identify:"",
      },
      prompt: {
        prompt1: "",
        prompt2: "",
        prompt3: ""
      }
    };
  },
  components:{
    Identify
  },
  methods: {
    // 用户名
    checkUsername() {
      this.prompt.prompt1 = "";
      this.isReturn = true;
      var n = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if (!this.userInfo.phone) {
        this.prompt.prompt1 = "手机号不能为空";
        this.isReturn = true;
      } else if (!n.test(this.userInfo.phone)) {
        this.prompt.prompt1 = "手机号码格式不正确";
        this.isReturn = true;
      }
    },
    // 密码
    checkPassword() {
      this.prompt.prompt2 = "";
      this.isReturn = true;
      var p = /[a-zA-Z]\w[z0-9]/;
      if (!this.userInfo.password) {
        this.isReturn = true;
        this.prompt.prompt2 = "密码不能为空";
      } else if (!p.test(this.userInfo.password)) {
        this.isReturn = true;
        this.prompt.prompt2 = "由字母+数字组成，字母开头";
      }
    },
    // 验证码
    checkIdentify() {
      this.prompt.prompt3 = "";
      this.isReturn = true;
      var p = this.identifyCode;
      if (!this.userInfo.identify) {
        this.isReturn = true;
        this.prompt.prompt3 = "验证码不能为空";
      } else if (p!=(this.userInfo.identify)) {
        this.isReturn = true;
        this.prompt.prompt3 = "请输入正确的验证码";
      }
    },
    // 验证码
    // 点击刷新图标生成验证码
    changeCode(){   
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    // 生成一个0~10的随机整数
     randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 随机生成验证码字符串
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    
  },
  
};
</script>
<style lang="less" scoped>
.register-title {
  width: 100%;
  line-height: 400px;
  text-align: center;
  font-size: 60px;
}
.form-group {
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  padding: 0 20px;

  label {
    width: 320px;
  }

  .phone,.password,.picture {
    width: 70%;
    height: 90px;
    line-height: 90px;
    box-sizing: border-box;
    font-size: 36px;
    // margin-top: 20px;
    border-style: none;
    border-bottom: 0.2px solid #ccc;
  }
  .verify {
    display: inline-block;
    width: 200px;
    line-height: 90px;
    text-align: center;
    margin: 0px;
  }

  .prompt {
    font-size: 30px;
    color: red;
    margin: 0 0 10px 170px;
  }
  // .send-button{
  //   width: 200px;
  //   height: 80px;
  //   font-size:36px;
  //   text-align: center;
  //   border-radius: 15px;
  //   background-color: #9cf196;

  // }
  .picture-container {
    display: flex;
    align-items: center;
  }
}

.register-button {
  width: 90%;
  height: 100px;
  font-size: 50px;
  border-radius: 15px;
  margin: 100px 5% 0;
  background-color: #9cf196;
}
.p-register {
  text-align: right;
}
</style>

