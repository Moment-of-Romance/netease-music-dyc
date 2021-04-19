<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>看看我是什么颜色</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color: #aa3e13;
h1 {
  margin: 40px 0 0;
  color: $color;
}
</style>
