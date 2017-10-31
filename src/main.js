import Vue from 'vue'
//引入App.vue组件
import App from './App'
import router from './router'

//代码提示功能
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
