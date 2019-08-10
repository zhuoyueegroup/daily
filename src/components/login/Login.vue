<template>
  <div>
    <div class="login-title">登录</div>
    <form class="form-group">
      <!-- 手机号 -->
      <label for="username">用&nbsp;户&nbsp;名&nbsp;：</label>
      <input  class="username"  v-model="userInfo.username"  placeholder="小写字母构成"  @blur="checkUsername"  />
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
    <van-button class="login-button" type="primary" size="large" :to="{name:'home'}" >登录</van-button>
    <router-link  to="/register"><p class="p-register">还没有账号？请注册></p></router-link>
  </div>
</template>
<script>
import Identify from '../login/Identify.vue';
// import Register from '../login/Register'
export default {
  data() {
    return {
      // 验证码初始值
      identifyCode:"1212",
      // 验证码随机取值范围
      identifyCodes:"1234567890",
      isReturn: false,
      userInfo: {
      username: "",
      password: "",
      identify:""
      },
      prompt: {
        prompt1: "",
        prompt2: "",
        prompt3: ""
      }
    }
  },
  components:{
    Identify
  },
  methods: {
    // 用户名
    checkUsername() {
      this.prompt.prompt1 = "";
      this.isReturn = true;
      var n =/^[a-z]+$/;
      if (!this.userInfo.username) {
        this.prompt.prompt1 = "用户名不能为空";
        this.isReturn = true;
      } else if (!n.test(this.userInfo.username)) {
        this.prompt.prompt1 = "由小写字母构成";
        this.isReturn = true;
      }
      // if (window.localStorage.userArr) {
			// 		var array=JSON.parse(window.localStorage.userArr);
			// 	}else{array=[]}
			// 	//遍历数组进行匹配
			// 	for (var i = 0; i < array.length; i++) {
			// 		//判断是否有相同账号
			// 		console.log(array)
			// 		/*alert(array[i].username)*/
			// 		if (this.userInfo.username==array[i].username) {
			// 			alert('该账号已存在');
			// 			/*this.tiShi.tiShi1='该账号已存在';*/
			// 			return;
			// 		}
			// 	}
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
    // 生成验证码
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
  .login-title{
    width: 100%;
    line-height: 400px;
    text-align: center;
    font-size: 60px;

  }
  .form-group{
    width: 100%;
    height: 500px;
    box-sizing: border-box;
    padding: 0 20px;

    label{
      width:320px;
    }

    .username,.password,.picture{
      width: 70%;
      height: 100px;
      line-height: 100px;
      box-sizing: border-box;
      font-size: 36px;
      margin-top: 20px;
      border-style: none;
      border-bottom:0.2px solid #ccc;
    }

    .picture-container{
      display: flex;
      align-items: center;     
    }
    .verify{
      display: inline-block;
      width: 200px;
      line-height: 100px;
      text-align: center;
      margin: 0px;
    }
    .prompt {
    font-size: 30px;
    color: red;
    margin: 0 0 10px 170px;
  }
  }
  .login-button{
    width: 90%;
    height: 100px;
    font-size: 50px;
    border-radius: 15px;
    margin:100px 5% 0;
    background-color: #ffb5b5;
  }
  .p-register{
    text-align: right;
  }
</style>
