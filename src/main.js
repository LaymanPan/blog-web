// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import cookie from 'vue-cookie'

import {Navbar,Footbar} from './views/layout/homelayout/components'
import '@/permission'
import config from'@/config.js'// 引入全局配置
/* 引入element-ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // 国际化设置

Vue.use(ElementUI, { locale })
Vue.use(config)
Vue.config.productionTip = false

Vue.component('Navbar',Navbar)
Vue.component('Footbar',Footbar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  store,
  cookie,
  template: '<App/>'
})
