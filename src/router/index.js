import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TabBar from '../components/tabbar/TabBar.vue'
import Home from '../components/tabbar/Home.vue';
import Classify from '../components/tabbar/Classify.vue';
import Seckill from '../components/tabbar/Seckill.vue';
import Shopping from '../components/tabbar/Shopping.vue';
import Person from '../components/tabbar/Person.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {path: '/home',name: 'home',component: Home},
    {path:'/classify',name:'classify',component:Classify},
    {path:'/seckill',name:'seckill',component:Seckill},
    {path:'/shopping',name:'shopping',component:Shopping},
    {path:'/person',name:'person',component:Person},

  ]
})
