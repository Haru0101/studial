<template>
    <button @click="stopTimer">Stop</button>
</template>
<script>
    export default {
         methods: {
            stopTimer: function () {
                this.$parent.$parent.runningTimerState = false;
            }
        }
    }
</script>