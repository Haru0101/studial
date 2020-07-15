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
        padding: 20px 40px;
        border: 1px solid #ccc; 
        border-radius: 10px;
        background: #F4F4F8;
        box-shadow: inset 8px 8px 16px #c1c1c4, 
            inset -8px -8px 16px #ffffff;
            margin: 0px 0px 20px;
    }
</style>