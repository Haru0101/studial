<template>
  <div id="app">
    <div class="wrapper">
      <Logo v-show="true"></Logo>
      <Dial v-show="true" :selectedTime="selectedTime"></Dial>
      <SelectOption v-show="true"></SelectOption>
      <Buttons :runningTimerState="runningTimerState" v-show="true"></Buttons>
    </div>
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
        selectedTime: 0,
        runningTimerState: false
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
  }

  .wrapper {
    padding: 0 15px;
  }
</style>