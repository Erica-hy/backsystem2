import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
