import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Add_Transaction from '@/components/Add_Transaction'
import Login from '@/components/Login'
import Website from '@/components/Website'
import PlaceOrder from '@/components/PlaceOrder'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/transaction',
      name: 'Add_Transaction',
      component: Add_Transaction,
    },
    {
      path:'/Login',
      name: 'Login',
      component: Login
    },
    {
      path:'/website',
      name: 'Website',
      component: Website
    },
    {
      path:'/placeorder',
      name: 'PlaceOrder',
      component: PlaceOrder
    },
    {
      path:'/home',
      name: 'Home',
      component: Home
    },
  ], 
  mode: 'history',
})
