<template>
    <button @click="incrementCounter"> {{ counter }} </button>
</template>

<script>
export default {
    data () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter () {
            thus.counter++
            this.$emit('increment') // chama evento do v-on na componente pai
        }
    }
}
</script>