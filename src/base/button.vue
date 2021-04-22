<template>
  <div class="button-container" :style="{backgroundColor: background}">
    <div
      @click="onClick"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dyc-button',
  data () {
    return {
      msg: '我是button'
    }
  },
  props: {
    background: {
      type: String,
      default: '#876543'
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.button-container {
  display: inline-block;
  padding: 5px 16px;
  border: 1px solid var(--button-border-color);
  border-radius: 2px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: var(--button-hover-bgcolor)
  }
}
</style>
