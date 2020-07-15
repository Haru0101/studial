<template>
    <div class="buttonsWrap">
        <StartButton v-if="!runningTimerState"></StartButton>
        <StopButton v-else></StopButton>
        <ResetButton v-show="true"></ResetButton>
    </div>
</template>
<script>
    import StartButton from './Buttons/StartButton'
    import StopButton from './Buttons/StopButton'
    import ResetButton from './Buttons/ResetButton'
    export default {
        components: {
            StartButton,
            StopButton,
            ResetButton
        },
        props: {
            runningTimerState: Boolean
        }
    }
</script>
<style lang="scss">
    .buttonsWrap {
        button {
            width: 100%;
            margin-bottom: 10px;
        }
    }
    button {
        border: none;
        border-radius: 50px;
        background: #F4F4F8;
        box-shadow:  5px 5px 10px #c1c1c4, -5px -5px 10px #ffffff;
        padding: 20px 30px;
        &:active {
            transition: 0.1s all;
            box-shadow: none;
        }
    }
</style>