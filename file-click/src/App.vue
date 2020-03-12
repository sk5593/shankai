<template>
  <div id="app">
    <file/>
  </div>
</template>

<script>
import file from './pages/file.vue'

export default {
  name: 'App',
  components: {
    file
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
