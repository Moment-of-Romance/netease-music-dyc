import Vue from 'vue'
import App from './App.vue'
// 引入样式
import '@/style/index.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
