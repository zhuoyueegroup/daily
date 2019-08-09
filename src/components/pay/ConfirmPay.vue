<template>
    <div>
        <div class="confirm-header">
            <router-link class="header-icon" to='/shopping'><span>取消</span></router-link>
            <p class="header-title">确认支付</p>
        </div>
        <div class="confirm-content">
            <div class="confirm-pay"> 
                <h4 class="pay-h4">卓越商城1234567897451号订单</h4>
                <p  class="pay-p">￥8697.00</p>
            </div>
            <div class="confirm-payee">
                <span>收款方</span>
                <span>卓越手机卖场</span>
            </div>
            <router-link to='/payfaliure'><van-button type="default" class="confirm-button">立即支付</van-button></router-link>
        </div>
        <p class="confirm-footer">
            支付安全由中国人民财产保险股份有限公司承保
        </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.confirm-header {
  box-sizing: border-box;
  line-height: 130px;
  text-align: center;
  color:#fff;
  display: flex;
  justify-content: flex-start;
  background: #262626;
  border-bottom: 2px solid rgb(236, 235, 235);
  .header-title{
    margin: 20px 30% 20px 25%;
    font-size: 50px;
    color:#fff;
  }
  .header-icon{
    margin:20px;
    font-size: 40px;
    color:rgb(218, 216, 216);
  }
}
.confirm-content{
    height:500px;
    // background: #000;
    .confirm-pay{
        height:260px;
        border-bottom:2px solid #ebebe0;
         .pay-h4{
             text-align: center;
              margin: 50px;
              font-size: 40px;
         }
         .pay-p{
             text-align: center;
             font-size: 70px;
             margin: 20px;
         }
    }
    .confirm-payee{
        line-height:120px;
        border-bottom:2px solid #ebebe0;
        font-size: 36px;
        color:rgb(170, 168, 168);
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
    }
    .confirm-button{
        width:94%;
        height:100px;
        font-size:50px;
        color: #fff;
        background: #00b300;
        border-radius: 20px;
        margin: 80px 20px 0;
    }

}
.confirm-footer{
    position: absolute;
    bottom: 0;
    width:100%;
    height:50px;
    font-size: 20px;
    color:rgb(124, 123, 123);
    text-align: center;
}
</style>
