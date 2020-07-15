<template>
    <div v-show="selectedTime">{{ selectedTime }}</div>
</template>
<script>
export default {
    props: {
        selectedTime: Number
    }
}
</script>