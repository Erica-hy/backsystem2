import Vue from 'vue'
import Router from 'vue-router'
import echats from 'echarts'
Vue.prototype.$echarts = echats
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
  RadioGroup,
  Table,
  TableColumn,
  Row,
  MessageBox,
  Dialog,
  Pagination
} from 'element-ui'

Vue.use(Dialog)
Vue.use(Row)
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
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
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
Vue.prototype.$Message = Message
Vue.prototype.$confirm = MessageBox.confirm
import login from '../components/login'
import home from '../components/home'
import MemberList from '../components/MemberList'
import EditMember from '../components/EditMember'
import homeChild from '../components/homeChild'
import AddMember from '../components/AddMember'
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
    component:home,
    children:[
      {
        path:'MemberList',
        component:MemberList
      },
      {
        path:'EditMember',
        component:EditMember
      },
      {
        path:'homeChild',
        component:homeChild
      },
      {
        path:'AddMember',
        component:AddMember
      }
    ]
  },


]

export default new Router({
  mode:'history',
  routes
})



