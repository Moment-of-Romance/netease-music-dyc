<template>
  <div class="header-container">
    <!-- left -->
    <div class="left">
      <div class="buttons">
        <div
          @click="clickHome"
          class="button-home"
        >
          <Icon
            :size="9"
            type="home"
          />
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="right">
      <!-- search -->
      <!-- theme -->
      <Theme/>
    </div>
  </div>
</template>

<script>
import Theme from '@/components/theme'
export default {
  data () {
    return {
      msg: '我是header',
      bgcolor: '#5d8d21'
    }
  },
  components: {
    Theme
  },
  methods: {
    clickHome () {
      console.log('clickHome')
    }
  }
}
</script>

<style lang="scss">
.header-container {
  height: 50px;
  display: flex;
  background-color: var(--header-bgcolor);
}
</style>
