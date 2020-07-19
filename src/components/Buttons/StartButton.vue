<template>
    <button @click="startTimer">Start</button>
</template>
<script>
    export default {
        methods: {
            startTimer: function () {
                let self = this;
                this.$parent.$parent.timerObj = setInterval(function() {self.$parent.$parent.count()}, 1000)
                this.$parent.$parent.runningTimerState = true;
            }
        }
    }
</script>