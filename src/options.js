// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './options/page/App'
import router from './options/router'
import VueResource from 'vue-resource'
/* css */
import 'element-ui/lib/theme-chalk/index.css'
//
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
// var loading = Vue.initLoading()
var app = new Vue({
  router,
  template: '<App/>',
  components: { App }
})
app.$mount('#app')
