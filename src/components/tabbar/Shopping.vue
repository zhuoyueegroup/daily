<template>
  <div class="shopping-container">
    <!-- 顶部，购物车 -->
    <div class="head">
      <span>返回</span>
      <span>购物车</span>
      <span>管理</span>
    </div>


    <!-- 主体部分 -->
    <div class="content">
        <!-- 购物车每个商品模块页 -->
        <div class="good" v-for="(item,index) in list" :key="index">
            <div>
              <van-checkbox class="list_icon" @click="radios(index)" v-model="item.checked" checked-color="#ff6633" icon-size="28px"></van-checkbox>
            </div>
            <div id="img"><img :src="item.href" alt=""></div>
            <div id="describe">
              <p id="productTitle">{{item.productTitle}}</p>
              <p>{{item.color}}</p>
              <span id="sale">{{"￥"+item.money}}</span><span id="first">{{"￥"+item.first}}</span>
            </div>
            <div class="sum_count">
              <label class="minute" @click="btn_minute(index)">-</label>
              <input class="input" v-model="item.num">
              <label class="add" @click="btn_add(index)">+</label>
            </div>
        </div>
        <!-- 结算部分 -->
        <div class="total">
            <!-- <div class="checkbox"><van-checkbox  id="checkbox" v-model="checked" @onclick="checkAll()" checked-color="#ff6633" icon-size="28px">全选</van-checkbox></div> -->
            <label class="bott_num">总数量：{{num}}</label>
            <label class="bott_money">共计：{{money}}</label>
            <router-link to='/settle' class="btn_sub"><label >结算</label></router-link>
        </div>
    </div>
    <!-- 推荐部分 -->
    <div class="recommend">
      <img src="../../assets/Shopping/1.jpg" alt="">
    </div>
    <!-- 底部导航栏 -->
    <div class="foot"></div>
    <TabBar :active="3"></TabBar>
  </div>
</template>
<script>
import TabBar from '../tabbar/TabBar'
export default {
      data(){
        return{
          // checked:false,
          list:[
            {
                productTitle: '华为P30pro', // 产品名
                money: 3988, // 价格
                num:1,//购物车的数量
                first:4000,//商品原价
                color: "黑色" ,// 颜色
                href:'../../../static/productimg/2.jpg',//商品图片路径
                checked:false
                // selected:false,
                // ischecked:false,
            },
            {
                productTitle: '苹果XR', // 产品名
                money: 3999, // 价格
                num:1, //购物车的数量
                first:5200,//商品原价
                color: "白色" ,// 颜色
                href:'../../../static/productimg/3.jpg',//商品图片路径
                checked:false,
                // selected:true,
                // ischecked:false,
            },
            {
                productTitle: '小米9', // 产品名
                money: 2998, // 价格
                num:1, //购物车的数量
                first:3200,//商品原价
                color: "黑色" ,// 颜色
                href:'../../../static/productimg/4.jpg',//商品图片路径
                checked:false,
                // selected:true,
                // ischecked:false,
            }
          ],
          money : 0,//所有价格
          num: 0, //被选中的商品数量
        }
      },
      // watch:{
      //   // 如果checkedAll发生变化这个函数就会执行
      //   checked:function(){
      //     if(checked == true){
      //       var list = list;
      //       for(var i=0;i<list.length;i++){
      //         list[index].checked = true;
      //       }
      //     }
      //   }
      // },
      created:function(){
        var price = 0;
        var numb = 0;
        var list = this.list;
        for(var i=0;i<list.length;i++){
          if(list[i].checked){
            price +=list[i].num * list[i].money;
            numb +=list[i].num;
          }
        }
        this.money = price;
        this.num= numb;
        console.log(numb);
        console.log(price);
      },
      components:{
             TabBar
      },
      methods:{
        //总价总数量方法   方便调用   再次多写了一次[可以跟初始化封装为一个方法]
        hh:function(){
          var price = 0;
          var numb = 0;
          var list = this.list
          for(var i=0;i<list.length;i++){
            if(list[i].checked){
              price += list[i].num * list[i].money;
              numb += list[i].num;
            }
          }
          this.money = price;
          this.num = numb;
          console.log(numb);
        },
        //删除购物车列表
        delerte:function(index){
          this.list.splice(index,1);
        },
        //选中为选中的
        radios:function(index){
          var list = this.list;
          list[index].checked = !list[index].checked;
          this.hh();
          console.log(list[index].checked)
        },
        // 添加
        btn_add:function(index){
            var list = this.list;
            var num = list[index].num;
            num = num + 1;
            list[index].num = num;
            this.hh();
        },
        // 减去
        btn_minute:function(index){
          var list = this.list;
          var num = list[index].num;
          if(num>1){
            num = num -1 ;
            list[index].num = num;
          }
          this.hh();
        },
        // checkAll:function(index){
        //     if(checked == true){
        //     var list = list;
        //     for(var i=0;i<list.length;i++){
        //     list[index].checked = true;
        //     }
        //   }
        // }
      }
}
</script>
<style scoped>
*{
  box-sizing: border-box;
}
  .shopping-container{
    width: 100%;
     padding: 20px 0 0 0; 
  }
  .head{
    width: 100%;
    height: 100px;
    line-height: 100px;
    padding: 0 21px 0 21px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 38px;
    border-bottom: 1px solid #cccccc;
  }
  .good{
    border: 1px solid #cccccc; 
    display: flex;
    justify-content: space-between;
    position:relative;
  }
  .good div{
    margin:auto auto;
    
  }
  .list_icon{
    position: absolute;
    top:40%;
    left: 5px;
  }
  #describe{
    width: 32.3%;
  }
  #img{
    height:180px;
    width: 25%;
    border: 1px solid black;
  }
  #img img{
    height:100%;
    width: 100%;
    /* border: 1px solid black; */
  }
  #productTitle{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .total{
    width: 100%;
    height:130px;
    border: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;
    padding: 0 21px 0 21px; 
    position: absolute;
    bottom: 100px;
    z-index: 9999;
  }
  .total label{
    font-size: 38px;
    line-height: 130px;
  }
  .btn_sub{
    background-color:#ff6633;
    color:#000;
    border-radius: 5px;
    width: 25%;
    text-align: center;
  }
  .recommend{
    margin: 40px 0px;
  }
  .recommend img{
    width: 50%;
    display: block;
    margin: 0 auto;
  }
  #sale{
    font-size: 45px;
    color: #ff6633;
    margin-right: 15px;
  }
  #first{
    font-size: 35px;
    text-decoration: line-through;
  }
  .sum_count{
    width:18%;
    padding:0;
  }
  .input{
    width: 70px;
    height: 50px;
    text-align: center;
    background-color: #cccccc;
    padding:0;
    margin: 0;
  }
  label{
    font-size: 50px;
    /* border: 1px solid red; */
  }
</style>


