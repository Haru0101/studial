<template>
    <div class="optionWrap">
        <input type="range" v-model="$parent.min" max="60" min="0">
    </div>
</template>
<style lang="scss" scoped>
    .optionWrap {
        margin: 40px 0;
    }

    input[type="range"] {
        display: block;
        width: 100%;

    }
</style>