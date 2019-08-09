<template>
  <div class="pay-tool">
    <div class="pay-tool-title ">
      <span class="pay-close" @click="backHandle">
        <!-- <van-icon name="cross" /> -->
        </span>
      <span class="pay-title">请输入交易密码</span>
    </div>
    <div class="pay-tool-content">
      <div class="pay-tool-inputs">
        <div class="item" v-for="(i, index) in items" :key="index">
          <span class="icon_dot" v-if="password[i]"></span>
        </div>
      </div>
      <div class="pay-tool-link">
        <div class="link" @click="forgotPassword()">忘记密码？</div>
      </div>
    </div>
    <div class="pay-tool-keyboard">
      <ul>
        <li @click="keyUpHandle($event, index)" v-for="(val, index) in keys" :key="index">
          {{ val }}
        </li>
         
         <li class="del" @click="delHandle">确认</li>
         <li class="del" @click="delHandle">0</li>
         <li class="del" @click="delHandle"><i class="iconfont">&#xe63e;</i></li>
      </ul>
    </div>
  </div>
</template>
<script>
const keys = () => [1, 2, 3, 4, 5, 6, 7, 8, 9]
export default {
  data () {
    return {
      items: [0, 1, 2, 3, 4, 5],
      keys: keys(),
      password: ''
    }
  },
  methods: {
    backHandle () { // 关闭密码输入
      this.clearPasswordHandle()  // 返回时清除password
      this.$emit('closepassword') // 返回上级
    },
    forgotPassword () { // 忘记密码
      // this.$router.push({path:'/changepassword/forgot'}) // 这里跳转忘记密码页
    },
    keyUpHandle (e, index) { // 更新密码
      // let text = e.currentTarget.innerText
      // console.log(this.keys[index].toString())
      let text = this.keys[index].toString()
      let len = this.password.length
      if (!text || len >= 6) return
      this.password = this.password + text
      this.passwordData() // 为6位输出密码
    },
    delHandle () { // 删除密码
      if (this.password.length <= 0) return false
      // this.password.shift()
      this.password = this.password.substring(0, this.password.length-1)
    },
    passwordData () { // 输出密码
      // console.log(parseInt(this.password.join(' ').replace(/\s/g, '')))
      // console.log(this.password)
      this.$emit('passwordData', this.password)
    },
    clearPasswordHandle: function () { // 清空密码
      this.password = ''
    }
  }
}
</script>
 
<style lang="less" scoped>
  .pay-tool {
    font-size: 50px;
    position: absolute;
    width:100%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
    .pay-tool-title {
      display: inline-block;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #f7f7f7;
      line-height: 80px;
      font-size:50px;
      text-align: center;
      overflow: hidden;
      // .pay-close {
      //   font-size: 60px;
      //   position: absolute;
      //   left:0;
      //   top:0;
      //   display: inline-block;
      //   margin: 5px 10px;
      // }
      .pay-title {
        font-size: 48px;
        color: #323333;
        
      }
    }
    .pay-tool-content {
      // margin: .6rem .75rem 0 .75rem;
      .pay-tool-inputs {
        width:650px;
        line-height:125px;
        border: 2px solid #aeaeae;
        border-radius: 5px;
        display: flex;
        margin:0 auto;
        .item {
          width: 122px;
          height: 122px;
          border-right: 1px solid #aeaeae;
          line-height:122px;
          text-align: center;
          &:last-child {
            border-right: none;
          }
          .icon_dot {
            display: inline-block;
            width: .2rem;
            height: .2rem;
            background: #323333;
            border-radius: 20px;
            background-size: cover;
          }
        }
      }
      .pay-tool-link {
        // padding: 0.4rem;
        text-align: right;
        .link {
          font-size: 35px;
          color: #3c8cfb;
        }
      }
    }
    .pay-tool-keyboard {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      ul {
        width:100%;
        display: flex;
        // justify-content: space-around;
        flex-wrap: wrap; 
        li {
          margin: 5px auto; 
          width: 32%;
          height: 130px;
          line-height: 120px;
          text-align: center;
          border: 2px solid #aeaeae;
           border-radius: 10px;
          font-size:60px;
          color: rgb(134, 133, 133);
          font-weight: 500;
          &:nth-child(10), &:nth-child(12) {
             background: rgb(226, 225, 225);
          }
        }
        .del{
          .iconfont{
            line-height:130px;
            font-size: 90px;
            display: block;
            font-weight: 600;
            color: rgb(134, 133, 133);
          }
        }
      }
    }
  }
</style>
