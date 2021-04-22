import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入 global 插件
import global from './utils/global'
// 引入样式
import '@/style/index.scss'
Vue.config.productionTip = false

// 注册全局组件
Vue.use(global)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
