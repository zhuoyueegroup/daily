// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入vue-router
import router from './router'
// 导入vuex
import {store} from './store/store'
// 导入axios
import axios from 'axios'

// 按需加载vant组件
<<<<<<< HEAD
import { Button,Loading,Tabbar, TabbarItem ,Sidebar, SidebarItem ,Search,Icon,Panel,Image,Field,Cell, CellGroup,Card,Tag,Tab, Tabs,CountDown,Checkbox,CheckboxGroup,NavBar, ContactCard, ContactList, ContactEdit, Popup ,RadioGroup, Radio, CouponCell, CouponList } from 'vant';
Vue.use(Button).use(Loading).use(Tabbar).use(TabbarItem).use(Sidebar).use(SidebarItem).use(Search).use(Icon).use(Panel).use(Image).use(Field).use(Cell).use(CellGroup).use(Card).use(Tag).use(Tab).use(Tabs).use(CountDown).use(Checkbox).use(CheckboxGroup).use(CouponCell).use(CouponList)
.use(NavBar).use(ContactCard).use(ContactList).use(ContactEdit).use(Popup).use(RadioGroup).use(Radio);
=======
import { Button,Loading,Tabbar, TabbarItem ,Sidebar, SidebarItem ,Search,Icon,Panel,Image,Field,Cell, CellGroup,Card,Tag,Tab, Tabs,CountDown,Checkbox,CheckboxGroup,Grid,GridItem } from 'vant';
Vue.use(Button).use(Loading).use(Tabbar).use(TabbarItem).use(Sidebar).use(SidebarItem).use(Search).use(Icon).use(Panel).use(Image).use(Field).use(Cell).use(CellGroup).use(Card).use(Tag).use(Tab).use(Tabs).use(CountDown).use(Checkbox).use(CheckboxGroup).use(Grid).use(GridItem );
>>>>>>> 7a364a7d33b701f5ac46d520484275b10c708cf2

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
