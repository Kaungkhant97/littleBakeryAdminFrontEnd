import Vue from 'vue'
import Router from 'vue-router'
import Cake from '@/components/Cake'
import CakeForm from '@/components/CakeForm'
import GG from '@/components/GG'
import Order from '@/components/Order'
import OrderDetail from '@/components/OrderDetail'
import User from '@/components/User'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cake',
      component: Cake
    },
    {
      path: '/gg',
      name: 'gg',
      component: GG
    },
    {
      path: '/cakeform',
      name: 'cakeform',
      component: CakeForm
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/order/:id',
      name: 'orderDetail',
      component: OrderDetail
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
  ]
})
