import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Add_Transaction from '@/components/Add_Transaction'
import DashboardBody from '@/components/DashboardBody'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path:'/Login',
      name: 'Login',
      component: Login
    }
  ], 
  mode: 'history',
})
