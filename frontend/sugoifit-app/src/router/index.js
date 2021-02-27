import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Add_Transaction from '@/components/Add_Transaction'
import DashboardBody from '@/components/DashboardBody'
import Login from '@/components/Login'
import Website from '@/components/Website'
import PlaceOrder from '@/components/PlaceOrder'
import Home from '@/components/Home'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/transaction',
          name: 'Add_Transaction',
          component: Add_Transaction,
        },
        {
          path: '/DashboardBody',
          name: 'DashboardBody',
          component: DashboardBody,
        },
        

      ]
    },
    // {
    //   path: '/transaction',
    //   name: 'Add_Transaction',
    //   component: Add_Transaction,
    // },
    {
     path:'/',
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
    {
      path: '/',
      name:'SignUp',
      component: SignUp
    }
  ], 
  mode: 'history',
})
