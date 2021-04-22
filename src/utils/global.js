import {
//   Input,
//   Dialog,
//   Button,
//   Loading,
//   Carousel,
//   CarouselItem,
//   Table,
//   TableColum,
  Popover
//   Pagination
} from 'element-ui'
// 导入 vue-lazyload
// import VueLazyload from 'vue-lazyload'
// import Meta from 'vue-meta'
// import * as utils from './index'

export default {
  install (Vue) {
    const globalComponents = require.context('@/base', true, /[a-z0-9]+\.(jsx?|vue)$/i)
    console.log(globalComponents.keys())
    // 注册全局组件
    globalComponents.keys().forEach(filename => {
      const componentConfig = globalComponents(filename)
      const componentName = componentConfig.default.name
      // 注册全局组件
      if (componentName) {
        Vue.component(componentName, componentConfig.default || componentConfig)
      }
    })

    // 注册element-ui
    Vue.use(Popover)
  }
}
