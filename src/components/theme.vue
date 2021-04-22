<template>
  <div class="theme">
    <el-popover
      placement="top"
      v-model="visible"
      width="230"
    >
      <div class="themes">
        <div
          :key="index"
          @click="changeTheme(themeKey)"
          class="theme-item"
          v-for="(themeValue, themeKey, index) in themeMap"
        >
          <div
            :style="themeValue.style"
            class="theme-icon"
          ></div>
          <p>{{themeValue.title}}</p>
        </div>
      </div>
      <!-- <Icon
        :backdrop="true"
        slot="reference"
        type="skin"
      /> -->
    </el-popover>
  </div>
</template>

<script>
// 导入good-storage 以及 theme variable
import storage from 'good-storage'
import whiteVars from '@/style/themes/whiteVariables'
import redVars from '@/style/themes/redVariables'
import darkVars from '@/style/themes/variables'

// 定义一个 存到 本地storage 的一个key
const THEME_KEY = '__theme__'
const themes = {
  white: 'white',
  red: 'red',
  dark: 'dark'
}
export default {
  data () {
    return {
      visible: true,
      themeMap: {
        [themes.white]: {
          title: '浅色',
          file: whiteVars,
          style: {
            backgroundColor: '#F6F6F6'
          }
        },
        [themes.red]: {
          title: '红色',
          file: redVars,
          style: {
            backgroundColor: '#D33A31'
          }
        },
        [themes.dark]: {
          title: '深色',
          file: darkVars,
          style: {
            backgroundColor: '#202020'
          }
        }
      }
    }
  },
  created () {
    this.changeTheme(storage.get(THEME_KEY, themes.white))
  },
  methods: {
    changeTheme (themeKey) {
      // 设置本地 storage themeKey
      storage.set(THEME_KEY, themeKey)
      // 获取对应的 theme
      const theme = this.themeMap[themeKey].file
      // 遍历 theme 将对应的值设置为对应的属性
      Object.keys(theme).forEach(key => {
        document.documentElement.style.setProperty(key, theme[key])
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
