<template>
    <button @click="resetTimer">Reset</button>
</template>
<script>
    export default {
        methods: {
            resetTimer: function () {
                this.$parent.$parent.min = 0;
                this.$parent.$parent.sec = 0;
                this.$parent.$parent.runningTimerState = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    button {
        color: red;
    }
</style>