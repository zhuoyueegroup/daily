<template>
  <div class="classify-container">
    <!-- 搜索框 -->
    <van-search input-align="center" class="search" v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
      <div slot="action"><van-icon name="comment-o" /></div>
    </van-search>


    <div class="content">

       <!-- 左侧导航 -->
      <sidebar :data="brands"></sidebar>


      <!-- 右侧商品信息 -->
      <div class="goods-list">

        <!-- 热卖商品 -->
        <div class="hot-goods">
          <span class="title">热卖</span>

          <div class="goods-item">
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
          </div>
        </div>

        <!-- 新品 -->
        <div class="new-goods">
          <span class="title">新品</span>
          <div class="goods-item">
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
            <div class="goods">
              <van-image width="100%" height="100%" ></van-image>
              <span>苹果x</span>
            </div>
          </div>
        </div>


      </div>

    </div>

    <!-- 底部导航 -->
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '../tabbar/TabBar'
import Sidebar from '../commoncomponents/Sidebar';
export default {
  data () {
    return {
      value:'',
      brands:[
        {id:'01',name:'小米'},
        {id:'02',name:'华为'},
        {id:'03',name:'中兴'},
        {id:'04',name:'三星'},
        {id:'05',name:'vivo'},
        {id:'06',name:'oppo'},
        {id:'07',name:'魅族'},
      ],
      activeKey:0
    }
  },
  components:{
    TabBar,
    Sidebar
  }
}
</script>


<style lang="less" scoped>

  .classify-container{
    width: 100%;
    height: 100%;
    background: #F8F8F8;

    .search{
      height: 100px;
      line-height: 100px;
      display: flex;
      align-items: center;
      background-color: red;
    }
    .content{
      display: flex;

      .brands-list{
        width: 200px;
        text-align: center;
        .brands-item{
          width: 200px;
          height: 100px;
        }
      }

      // 右侧商品信息
      .goods-list{
        width: 100%;

        .hot-goods,.new-goods{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        //商品信息容器
        .goods-item{
          display: flex;
          flex-wrap: wrap;
          //商品具体信息
          .goods{
            width: 33%;
            height: 250px;
            box-sizing: border-box;
            // margin: 20px;
            padding: 10px;
            margin: 10px 0;
            background-color: red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
          }

        }
      }
    }


  }
</style>
