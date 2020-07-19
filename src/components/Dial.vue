<template>
    <div class="dial">
        <div>
            {{ selectedTime }}
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            selectedTime: Number
        }
    }
</script>
<style lang="scss" scoped>
    .dial {
        font-size: 26px;
        padding: 40px;
        border-radius: 10px;
        background: #F4F4F8;
        box-shadow: inset 5px 5px 10px #c1c1c4,
            inset -5px -5px 10px #ffffff;
            margin: 0 0 20px;
    }
</style>