<template>
    <button @click="stopTimer">Stop</button>
</template>
<script>
    export default {
        methods: {
            stopTimer: function () {
                clearInterval(this.$parent.$parent.timerObj);
                this.$parent.$parent.runningTimerState = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    button {
        box-shadow: inset 5px 5px 10px #c1c1c4, inset -5px -5px 10px #ffffff;

    }
</style>