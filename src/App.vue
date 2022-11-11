<template>
  <div class='wrapper'>
    <Header />
    <router-view class='router'/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'

export default {
  name: 'App',

  components: {
    Header
  }
}
</script>

<style lang='sass' scoped>
@import '/src/assets/styles/reset.css'

.wrapper
  min-height: 100vh
  background-color: #18181d
</style>
