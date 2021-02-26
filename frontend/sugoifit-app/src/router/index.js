import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Add_Transaction from '@/components/Add_Transaction'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Dashboard',
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
      path: '/',
      name:'SignUp',
      component: SignUp
    }
  ], 
  mode: 'history',
})
