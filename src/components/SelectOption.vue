<template>
    <div class="buttonsWrap">
        <button v-for="(optionTime, index) in optionTimeArray" :key="index" @click="selectTime(optionTime)">
            {{ optionTime }} min
        </button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                optionTimeArray: [15, 30, 45, 60],
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
    .buttonsWrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>