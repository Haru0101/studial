<template>
    <button @click="startTimer">Start</button>
</template>
<script>
    export default {
        methods: {
            startTimer: function () {
                this.$parent.$parent.runningTimerState = true;
            }
        }
    }
</script>