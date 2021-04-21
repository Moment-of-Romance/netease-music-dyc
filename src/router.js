import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入 组件
const Discovery = () => import('@/pages/discovery')

// 注册路由
Vue.use(VueRouter)

export const menuRoutes = [
  {
    path: '/discovery',
    name: 'discovery',
    component: Discovery,
    meta: {
      title: '发现音乐',
      icon: 'music'
    }
  }
]
// 导出路由
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'discovery',
      component: Discovery
    }
  ]
})
