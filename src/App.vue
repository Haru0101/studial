<template>
  <div id="app">
    <div class="wrapper">
      <Logo v-show="true"></Logo>
      <Dial v-show="true"></Dial>
      <SelectOption v-show="true" :min="min"></SelectOption>
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
        runningTimerState: false,
        timerObj: null,
        min: 0,
        sec: 0,
      }
    },
    mounted() {
      window.navigator.vibrate(200);
    },
    methods: {
      count: function () {
        if (this.sec <= 0 && this.min >= 1) {
          this.min--;
          this.sec = 59;
        } else if (this.sec <= 0 && this.min <= 0) {
          this.complete();
        } else {
          this.sec--;
        }
      },
      complete: function () {
        clearInterval(this.timerObj)
      }
    }
  }
</script>

<style>
  body {
    background-color: #F4F4F8;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
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