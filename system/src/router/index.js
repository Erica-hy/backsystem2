import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import 'element-ui/lib/theme-chalk/index.css'
const showMessage = Symbol('showMessage')

import {
  Form,
  FormItem,
  Input,
  Button,
  Alert,
  Message,
  Container,
  Header,
  Aside,
  Main,
  MenuItem,
  MenuItemGroup,
  Menu,
  Submenu,
  RadioButton,
  RadioGroup
} from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Alert)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem,)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(RadioButton)
Vue.use(RadioGroup)
class message {
  success (options, single = true) {
    this[showMessage]('success', options, single)
  }
  warning (options, single = true) {
    this[showMessage]('warning', options, single)
  }
  info (options, single = true) {
    this[showMessage]('info', options, single)
  }
  error (options, single = true) {
    this[showMessage]('error', options, single)
  }

  [showMessage] (type, options, single) {
    if (single) {
      // 判断是否已存在Message
      if (document.getElementsByClassName('el-message').length === 0) {
        Message[type](options)
      }
    } else {
      Message[type](options)
    }
  }
}
Vue.prototype.$message = new message()

import login from '../components/login'
import home from '../components/home'
const routes =[
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/home',
    component:home
  }

]

export default new Router({
  mode:'history',
  routes
})



