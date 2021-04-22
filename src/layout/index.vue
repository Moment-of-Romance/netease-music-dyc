<template>
  <div class="layout">
    <Header/>
    <Menu/>
  </div>
</template>
<script>
// 导入组件
import Header from './header'
import Menu from './menu'
export default {
  name: 'layout',
  components: {
    Header,
    Menu
  }
}
</script>
<style lang="scss" scoped>
  .layout {
    height: 100%;
  }
</style>
