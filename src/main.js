import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 引入样式
import '@/style/index.scss'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
