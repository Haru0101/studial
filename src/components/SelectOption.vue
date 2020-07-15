<template>
    <div class="buttonsWrap">
        <input type="range" v-model="optionTime" max="60" min="0">
            {{ optionTime }} min
    </div>
</template>
<script>
    export default {
        data() {
            return {
                optionTime: 0
            }
        },
        methods: {
            selectTime: function (selectedTime) {
                this.$parent.selectedTime = selectedTime;
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>