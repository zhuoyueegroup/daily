// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入vue-router
import router from './router'
// 导入vuex
import {store} from './store/store'

// Vue.use(vant)
// 导入axios
import axios from 'axios'
//引入iconfont图标
import './assets/style/iconfont/iconfont.css'
// 按需加载vant组件
import { Button,Loading,Tabbar, TabbarItem ,Sidebar, SidebarItem ,Search,Icon,Panel,Image,Field,Cell, CellGroup,Card,Tag,Tab, Tabs,CountDown,Checkbox,CheckboxGroup,NavBar, ContactCard, ContactList, ContactEdit, Popup ,RadioGroup, Radio, CouponCell, CouponList,Grid,GridItem,GoodsAction,GoodsActionIcon,GoodsActionButton ,Swipe, SwipeItem, Toast} from 'vant';
Vue.use(Button).use(Loading).use(Tabbar).use(TabbarItem).use(Sidebar).use(SidebarItem).use(Search).use(Icon).use(Panel).use(Image).use(Field).use(Cell).use(CellGroup).use(Card).use(Tag).use(Tab).use(Tabs).use(CountDown).use(Checkbox).use(CheckboxGroup).use(CouponCell).use(CouponList).use(Grid).use(GridItem ).use(NavBar).use(ContactCard).use(ContactList).use(ContactEdit).use(Popup).use(RadioGroup).use(Radio).use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon).use(Swipe).use(SwipeItem).use(Toast);

// router.beforeEach((to, from, next) => {
//   // alert("还没有登录，请先登录");
//   // 必须要有个next()函数，不然就无法执行之后的操作
//   // next();
//   console.log(to);

//   // 判断store.getters.isLogin===false
//   if(to.path=='/login'||to.path=='/register'){
//     next();
//   }else{
//   alert("还没有登录，请先登录");
//     next('/login');
//   }
// });

Vue.config.productionTip = false
/*rnrnrn*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
