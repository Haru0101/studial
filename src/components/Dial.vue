<template>
    <div class="dial">
        <div>
            {{ formatTime }}
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            formatTime: function () {
                let timeStrings = [
                    this.$parent.min.toString(),
                    this.$parent.sec.toString()
                ].map(function (str) {
                    if (str.length < 2) {
                        return "0" + str
                    } else {
                        return str
                    }
                })
                return timeStrings[0] + ":" + timeStrings[1]
            }
        },
    }
</script>
<style lang="scss" scoped>
    .dial {
        font-size: 50px;
        padding: 40px;
        border-radius: 10px;
        background: #F4F4F8;
        box-shadow: inset 5px 5px 10px #c1c1c4,
            inset -5px -5px 10px #ffffff;
        margin: 0 0 20px;
    }
</style>