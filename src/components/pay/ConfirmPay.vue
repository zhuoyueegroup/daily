<template>
  <div>
      <!-- 确认支付头部 -->
    <div class="confirm-header">
        <router-link class="header-icon" to="/shopping">
            <span>取消</span>
        </router-link>
        <p class="header-title">确认支付</p>
    </div>
    <!-- 确认支付内容 -->
    <div class="confirm-content">
        <!-- 支付订单 -->
      <div class="confirm-pay">
        <h4 class="pay-h4">卓越商城1234567897451号订单</h4>
        <p class="pay-p">￥8697.00</p>
      </div>
        <!-- 收款方 -->
      <div class="confirm-payee">
        <span>收款方</span>
        <span>卓越手机卖场</span>
      </div>
        <!-- 确认支付按钮跳转输入密码 -->
      <div class="confirm-button">
        <van-button type="primary" @click="showPopup">立即支付</van-button>
        <van-popup v-model="show" position="bottom" :style="{ height: '56%' }">
          <set-password @passwordData="getPassword" @closepassword="showPayPassword=false"></set-password>
        </van-popup>
      </div>
      <!-- <router-link to='/payfaliure'><van-button type="default" class="confirm-button">立即支付</van-button></router-link> -->
    </div>
    <!-- 底部信息 -->
    <p class="confirm-footer">支付安全由中国人民财产保险股份有限公司承保</p>
  </div>
</template>
<script>
import SetPassword from "../pay/SetPassword.vue";
export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    SetPassword
  },
  methods: {
    //是否显示输入密码框
    showPopup() {
      this.show = true;
    },
    // 输入密码
    getPassword(passwordData) {
      passwordData = passwordData.toString();
      if (passwordData.length !== 6) return; // 长度不够
      this.paypassword = passwordData; // 给到支付密码
    }
  }
};
</script>
<style lang="less" scoped>
// 确认支付顶部信息
.confirm-header {
  box-sizing: border-box;
  line-height: 130px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  background: #262626;
  border-bottom: 2px solid rgb(236, 235, 235);
    
  .header-title {
    margin: 20px 30% 20px 25%;
    font-size: 50px;
    color: #fff;
  }

  .header-icon {
    margin: 20px;
    font-size: 40px;
    color: rgb(218, 216, 216);
  }
}

// 确认支付内容
.confirm-content {
  height: 500px;

  .confirm-pay {
    height: 260px;
    border-bottom: 2px solid #ebebe0;
    // 订单信息
    .pay-h4 {
      text-align: center;
      margin: 50px;
      font-size: 40px;
    }
    // 合计金额
    .pay-p {
      text-align: center;
      font-size: 70px;
      margin: 20px;
    }
  }
// 收款方
  .confirm-payee {
    line-height: 120px;
    border-bottom: 2px solid #ebebe0;
    font-size: 36px;
    color: rgb(170, 168, 168);
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
//   确认支付按钮跳转密码框
  .confirm-button {
    width: 94%;
    height: 100px;
    font-size: 50px;
    color: #fff;
    background: #00b300;
    border-radius: 20px;
    margin: 80px 20px 0;
    // 密码框入口样式
    .van-button--primary {
      width: 100%;
      height: 100%;
      line-height: 100px;
      font-size: 45px;
      color: #fff;
      text-align: center;
    }
  }
}
// 底部信息
.confirm-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  font-size: 20px;
  color: rgb(124, 123, 123);
  text-align: center;
}
</style>
