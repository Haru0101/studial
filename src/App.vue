<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Dial></Dial>
    <Button></Button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Dial from './components/Dial.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Dial,
    Button
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
