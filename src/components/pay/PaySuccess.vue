<template>
    <div >
        <!-- 支付成功顶部 -->
        <div class="paysuccess-header">
            <router-link to='/shopping'><van-icon name="arrow-left" /><span>返回</span></router-link>
            <div class="pay-success"><i class="iconfont">&#xe635;</i><span>付款成功</span></div>
        </div>
        <!-- 支付成功订单信息 -->
        <div class="paysuccess-order">
            <p class="order-p">订单编号：12345678998</p>
            <p class="order-p">实付金额：1693元</p>
        </div>
        <!-- 支付成功底部 -->
        <div class="footer">
            <button class="back-button" >查看订单</button>
            <router-link to='/home' class="back-button" style="border-left:1px solid #e6e6e6;">
                <button class="back-button" >返回首页</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    // 顶部样式
    .paysuccess-header{
        height:600px;
        background: #99cc00;
        color: #fff;
        padding: 30px;
        .pay-success{
            font-size: 80px;
            text-align: center;
            line-height:500px;
            .iconfont{
                font-size: 90px;
                margin: 10px;
            }
        }
    }
    // 订单信息样式
    .paysuccess-order{
        height:160px;
        overflow: hidden;
        background: #f3ffe5;
        .order-p{
            font-size: 40px;
            margin: 20px;
        }
    }
    // 底部样式
    .footer{
        position:fixed;
        bottom: 0;
        width:100%;
        display: flex;
        justify-content: space-around;
        // margin: 10px;
        border-top:2px solid #e6e6e6;
        // 返回首页
        .back-button{
            width:50%;
            border-style: none;
            background: none;
            padding: 20px;
            color:#000;
            text-align: center;
            
        }
    }
</style>
