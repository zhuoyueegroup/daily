<template>
  <div>
    <!-- 支付失败顶部 -->
    <div class="paysuccess-header">
      <router-link to="/shopping">
        <van-icon name="arrow-left" />
        <span>返回</span>
      </router-link>
      <div class="pay-success">
        <i class="iconfont">&#xe636;</i>
        <span>付款失败</span>
      </div>
    </div>
    <!-- 支付失败订单信息 -->
    <div class="paysuccess-order">
      <p class="order-p">订单编号：12345678998</p>
      <p class="order-p">实付金额：1693元</p>
    </div>
    <!-- 支付失败问题以及重新选择支付方式 -->
    <div class="pay-problem">
      <p class="pay-problem-p">支付遇到问题，请再次选择支付方式：</p>
      <!-- 支付方式选择 -->
      <div class="pay-problem-way">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <!-- 微信支付 -->
            <van-cell clickable @click="radio = '1'">
              <van-icon name="wechat" color="#00e600" size="25px" />
              <span>微信支付 &nbsp;&nbsp;工行信用卡支付，享优惠</span>
              <van-radio slot="right-icon" name="1" icon-size="20px" checked-color="#ff471a" />
            </van-cell>
            <!-- 支付宝支付 -->
            <van-cell clickable @click="radio = '2'">
              <van-icon name="alipay" color="#0066ff" size="25px" />
              <span>支付宝 &nbsp;&nbsp;支付订单，赢大礼</span>
              <van-radio slot="right-icon" name="2" icon-size="20px" checked-color="#ff471a" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </div>
    <!-- 底部信息 -->
    <div class="footer">
      <button class="back-button">查看订单</button>
      <router-link
        to="/ConfirmPay"
        class="back-button"
        style="border-left:1px solid #e6e6e6;background:#ff6000"
      >
        <button class="back-button" style="color:#fff">立即付款</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1"
    };
  }
};
</script>
<style lang="less" scoped>
// 顶部样式
.paysuccess-header {
  height: 600px;
  background: #e60000;
  color: #fff;
  padding: 30px;
  .pay-success {
    font-size: 80px;
    text-align: center;
    line-height: 500px;
    .iconfont {
      font-size: 90px;
    }
  }
}
// 订单信息样式
.paysuccess-order {
  height: 160px;
  overflow: hidden;
  background: #f3ffe5;
  border-bottom: 20px solid #f5f5f0;
  .order-p {
    font-size: 40px;
    margin: 20px;
  }
}
// 支付问题
.pay-problem-p {
  height: 50px;
  padding: 15px 20px;
  border-bottom: 1px solid #ccc;
  margin: 0;
}
// 支付方式选择样式
.pay-problem-way {
  height: 260px;
  .van-cell--clickable {
    line-height: 80px;
    font-size: 35px;
    border-bottom: 2px solid rgb(231, 231, 231);
    padding: 0 20px;
  }
  .coupon {
    line-height: 80px;
    font-size: 35px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    .van-icon {
      margin-top: 10px;
    }
  }
}
// 底部信息
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  // margin: 10px;
  border-top: 2px solid #e6e6e6;
  .back-button {
    width: 50%;
    border-style: none;
    background: none;
    padding: 20px;
    color: #000;
    text-align: center;
  }
}
</style>
