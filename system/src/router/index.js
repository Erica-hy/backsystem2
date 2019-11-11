import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import 'element-ui/lib/theme-chalk/index.css'
import {
  Form,
  FormItem,
  Input,
  Button
} from 'element-ui'


Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)


import login from '../components/login'

const routes =[
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:login
  }

]

export default new Router({
  mode:'history',
  routes
})
