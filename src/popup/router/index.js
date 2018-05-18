import Vue from 'vue'
import Router from 'vue-router'
import page from '../page'
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '',
      redirect: {name: 'login'}
    },
    {
      path: '/login',
      name: 'login',
      component: page.login
    }
  ]
})
export default router
