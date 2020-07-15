<template>
  <div id="app">
    <Logo v-show="true"></Logo>
    <Dial v-show="false" :selectedTime="selectedTime"></Dial>
    <SelectOption v-show="true"></SelectOption>
    <Buttons v-show="false"></Buttons>
  </div>
</template>

<script>
  import Dial from './components/Dial'
  import Buttons from './components/Buttons'
  import SelectOption from './components/SelectOption'
  import Logo from './components/Logo'

  export default {
    name: 'App',
    components: {
      Dial,
      SelectOption,
      Buttons,
      Logo
    },
    data() {
      return {
        selectedTime: null
      }
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