<template>
    <div class="buttonsWrap">
        <button class="" v-for="(optionTime, index) in optionTimeArray" :key="index" @click="selectTime(optionTime)">
            {{ optionTime }} min
        </button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                optionTimeArray: [15, 30, 45, 60]
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

        button {
            width: 100%;
            padding: 20px 0;
            margin: 10px 0;
            line-height: 1;
        }
    }
</style>