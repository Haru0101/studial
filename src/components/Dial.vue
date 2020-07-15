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
        height: 40px;
        padding: 20px 40px;
        border: 1px solid #ccc; 
    }
</style>