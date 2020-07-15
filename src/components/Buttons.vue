<template>
    <div>
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