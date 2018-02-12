import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Top from '@/components/Top'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/top',
      component: Top
    },
    {
      path: '/hello',
      component: HelloWorld
    }
  ]
})
