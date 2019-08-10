import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TabBar from '../components/tabbar/TabBar.vue'
import Home from '../components/tabbar/Home.vue';
import Classify from '../components/tabbar/Classify.vue';
import Seckill from '../components/tabbar/Seckill.vue';
import Shopping from '../components/tabbar/Shopping.vue';
import Person from '../components/tabbar/Person.vue';
import Login from '../components/login/Login.vue';
import Register from '../components/login/Register.vue';
import Settle from '../components/pay/Settle.vue';
import ConfirmPay from '../components/pay/ConfirmPay.vue';
import PaySuccess from '../components/pay/PaySuccess.vue';
import PayFaliure from '../components/pay/PayFaliure.vue';
<<<<<<< HEAD
import GoodsDetail from '../components/goods/GoodsDetail.vue';
// import SetPassword from '../components/pay/SetPassword.vue';
=======

>>>>>>> 9420c56bd847faa8f59b18688738c0dae5ff564f

Vue.use(Router)

export default new Router({
  routes: [

    {path: '/',redirect:'/home'},
    {path: '/home',name: 'home',component: Home},
    {path:'/classify',name:'classify',component:Classify},
    {path:'/seckill',name:'seckill',component:Seckill},
    {path:'/shopping',name:'shopping',component:Shopping},
    {path:'/person',name:'person',component:Person},
    {path:'/login',name:'login',component:Login},
    {path:'/register',name:'register',component:Register},
    {path:'/settle',name:'settle',component:Settle},
    {path:'/confirmpay',name:'confirmpay',component:ConfirmPay},
    {path:'/paysuccess',name:'paysuccess',component:PaySuccess},
    {path:'/payfaliure',name:'payfaliure',component:PayFaliure},
    {path:'/goodsdetail',name:'goodsdetail',component:GoodsDetail},

    // {path:'/setpassword',name:'setpassword',component:SetPassword},

  ]
})
