<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Dial></Dial>
    <Button></Button>
  </div>
</template>

<script>
import Dial from './components/Dial.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Dial,
    Button
  }
}
</script>

<style>
body {
  background-color: #F4F4F8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
