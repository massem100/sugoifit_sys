import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Website from '@/components/Website'
import Home from '@/components/Home'
import PlaceOrder from '@/components/PlaceOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/website',
      name: 'Website',
      component: Website
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/placeorder',
      name: 'PlaceOrder',
      component: PlaceOrder
    }
  ]
})
