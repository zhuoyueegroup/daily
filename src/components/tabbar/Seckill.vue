<template>
  <div class="seckill-container">
    <router-link to='/Home'><van-icon name="arrow-left" /></router-link>
    <van-tabs title-active-color="red">
      <van-tab title="正在疯抢">
        <!-- 正在疯抢模块 -->
        <div class="seck-time">
          <p class="seck-title" style="color:red">
            <van-icon name="fire" color="red" size="18px" />14:00正在疯抢
          </p>
          <!-- 正在疯抢倒计时模块 -->
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span>距结束</span>
              <span class="item">{{ timeData.hours }}</span>
              <span>:</span>
              <span class="item">{{ timeData.minutes }}</span>
              <span>:</span>
              <span class="item">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <!-- 正在疯抢商品展示模块 -->
        <div>
          <li class="goodslist" v-for="(item ,index) of message" :key="index">
            <div class="show-card">
              <img class="goodsimg" :src="item.img">
              <div class="goodsmessage">
                <h4 class="goodstitle">{{item.phonetitle}}</h4>
                <p class="goodsdesc">{{item.desc}}</p>
                <span class="goodstag">{{item.tag}}</span>
                <div class="show-footer">                  
                  <span class="goodsprice">{{item.price}}</span>
                  <span class="goodsorigin-price">{{item.originprice}}</span>
                  <button class="buy-button">马上抢></button>
                </div>
              </div>
            </div>
          </li>
        </div>
      </van-tab>
      <!-- 即将开抢模块 -->
      <van-tab title="即将开抢">
        <div class="seck-time">
          <p class="seck-title" style="color:orange">
            <van-icon name="clock" color="orange" size="18px" />15:00即将开抢
          </p>
          <!-- 即将开抢倒计时模块 -->
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span>距开始</span>
              <span class="item">{{ timeData.hours }}</span>
              <span>:</span>
              <span class="item">{{ timeData.minutes }}</span>
              <span>:</span>
              <span class="item">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <!-- 即将开抢商品展示模块 -->
        <div>
          <li class="goodslist" v-for="(item ,index) of message" :key="index">
            <div class="show-card">
              <img class="goodsimg" :src="item.img">
              <div class="goodsmessage">
                <h4 class="goodstitle">{{item.phonetitle}}</h4>
                <p class="goodsdesc">{{item.desc}}</p>
                <span class="goodstag">{{item.tag}}</span>
                <div class="show-footer">                  
                  <span class="goodsprice">{{item.price}}</span>
                  <span class="goodsorigin-price">{{item.originprice}}</span>
                  <button class="buy-button">马上抢></button>
                </div>
              </div>
            </div>
          </li>
        </div>
      </van-tab>
    </van-tabs>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from "../tabbar/TabBar";
export default {
   data() {
    return {
      time: 60 * 60 * 1000,
      message: [
        {img:" https://img.yzcdn.cn/vant/cat.jpeg",phonetitle: "手机1",desc:"商品描述 ",price: "￥1299",originprice: "1699",tag:"满100减50"},
        {img:" https://img.yzcdn.cn/vant/cat.jpeg",phonetitle: "手机2",desc:"商品描述 ",price: "￥1599",originprice: "1699",tag:"满100减50"},
        {img:" https://img.yzcdn.cn/vant/cat.jpeg",phonetitle: "手机3",desc:"商品描述 ",price: "￥1499",originprice: "1699",tag:"满100减50"},
        {img:" https://img.yzcdn.cn/vant/cat.jpeg",phonetitle: "手机4",desc:"商品描述 ",price: "￥1399",originprice: "1699",tag:"满100减50"},
        {img:" https://img.yzcdn.cn/vant/cat.jpeg",phonetitle: "手机4",desc:"商品描述 ",price: "￥1399",originprice: "1699",tag:"满100减50"},
        ]
    };
  },
  components: {
    TabBar
  }
};
</script>
<style lang="less" scoped>
//开始疯抢模块
.seck-time {
  height: 100px;
  font-size: 34px;
  text-align: center;
  margin-top: 10px;
  font-weight: 530;
  color: #fc3134;
  margin-bottom: 10px;
  .seck-title {
    line-height: 20px;
    margin: 5px 5px 0;
  }
  //倒计时模块
  .item {
    display: inline-block;
    line-height: 40px;
    width: 40px;
    margin: 10px;
    color: #fefbfb;
    font-size: 18px;
    font-weight: 530;
    text-align: center;
    border-radius: 8px;
    background-color: #4d4c4c;
  }
}
.goodslist{
  list-style: none;
}
//商品展示模块
.show-card {
  display: flex;
  height: 300px;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  position: relative;
  margin-bottom: 10px;
  //商品图片模块
  .goodsimg {
    width: 35%;
    height: 290px;
  }
  //商品右侧信息显示模块
  .goodsmessage{
    width:75%;
    //商品标题模块
  .goodstitle {
    margin: 10px;
    line-height: 40px;
    font-size: 40px;
    max-height: 50px;
  }
  //商品描述信息
  .goodsdesc {
    height:130px;
    margin: 10px;
    line-height: 34px;
    font-size: 34px;
    max-height: 100px;
    color: #151516;
  }
  //商品标签模块
  .goodstag {
     display: inline-block;
     height:40px;
     line-height: 40px;
     font-size: 28px;
     color: #fc3134;
     background: #fff2f2;
     border:1px solid #fae5e5;
     margin: 10px;
     font-weight: bold;
    }
  }
  //商品价格模块
  .show-footer{
    position: relative;
    display: flex;
    justify-content: flex-start;
    height:60px;
    line-height:60px;
    //商品秒杀价格
    .goodsprice {
      display: inline-block;
      margin: 10px;
      font-size: 50px;
      font-weight: 550;
      color: #fc3134;
      }
      //商品原始价格
    .goodsorigin-price {
       display: inline-block;
       margin: 10px 80px 10px 20px;
       font-size: 35px;
       font-weight: 400;
       color: #c2c0c0;
       text-decoration:line-through;
      }
      //商品抢购入口按钮
     .buy-button {
      display: inline-block;
      width: 160px;
      font-size: 35px;
      color: #fefbfb;
      font-weight: 530;
      background: #e02e24;
      border-radius: 10px;
      border-style: none;
      position: absolute;
      bottom: 0;
      right:0;
      margin: 10px 10px 0;
    }
  }
}
</style>
