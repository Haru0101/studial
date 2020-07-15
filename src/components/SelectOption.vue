<template>
    <div class="optionWrap">
        <input type="range" v-model="$parent.selectedTime" max="60" min="0">
        {{ selectedTime }} min
    </div>
</template>
<script>
    export default {
        props: {
            selectedTime: Number
        },
    }
</script>
<style lang="scss" scoped>
    .optionWrap {
        margin: 40px 0;
    }

    input[type="range"] {
        display: block;
        width: 100%;

    }
</style>