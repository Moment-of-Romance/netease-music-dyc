<template>
  <div class="menu">
    <!-- 用户组件 -->
    <!-- menu -->
    <div class="menu-wrap">
      <div class="menu-block" v-for="(menu, index) in menus" :key="index">
        <p v-if="menu.title">{{menu.title}}</p>
        <ul class="menu-list">
          <router-link
           v-for="(item, index) in menu.children"
           :key="index"
           tag="li"
           to="/"
           active-class="menu-item-active"
           class="menu-item"
           >
            <!-- 图标 -->
            <!-- <Icon></Icon> -->
            <!-- menu title -->
            <span>{{item.meta.title}}</span>
           </router-link>
        </ul>
      </div>
    </div>
    我是menu component

  </div>
</template>
<script>
import { menuRoutes } from '../router'
export default {
  data () {
    return {
      menus: [
        {
          type: 'root',
          children: menuRoutes
        }
      ]
    }
  },
  computed: {

  },
  mounted () {
    console.log(menuRoutes)
  }
}
</script>
<style lang="scss">
.menu {
  width: 350px;
  height: 100%;
  background-color: var(--menu-bgcolor);
  display: flex;
  flex-direction: column;

  .menu-wrap {
    height: 100%;
  }
}
</style>
