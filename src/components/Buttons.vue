<template>
    <div>
        <StartButton v-show="true"></StartButton>
        <StopButton v-show="true"></StopButton>
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
        }
    }
</script>