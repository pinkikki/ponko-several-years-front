import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Top from '@/components/Top'
import HelloWorld from '@/components/HelloWorld'
import appinput from '@/components/input/Input'

Vue.use(Router)
Vue.component('appinput', appinput)

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
