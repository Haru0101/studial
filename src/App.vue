<template>
  <div id="app">
    <Logo></Logo>
    <Dial></Dial>
    <SelectOption></SelectOption>
    <Button></Button>
  </div>
</template>

<script>
import Dial from './components/Dial'
import Button from './components/Button'
import SelectOption from './components/SelectOption'
import Logo from './components/Logo'

export default {
  name: 'App',
  components: {
    Dial,
    SelectOption,
    Button,
    Logo
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
