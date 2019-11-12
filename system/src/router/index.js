import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import 'element-ui/lib/theme-chalk/index.css'
import {
  Form,
  FormItem,
  Input,
  Button,
  Alert,
  Message
} from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Alert)

Vue.prototype.$message = Message
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



