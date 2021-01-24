<template>
<div>
    <p>{{ total }}</p>
    <child @increment="incrementTotal" />
    <child @increment="incrementTotal" />
</div>
</template>

<script>
import child from './child'

export default {
  components: { child },
  data () {
      return {
          total: 0
      }
  },
  methods: {
      incrementTotal () {
          this.total++
      }
  }
}
</script>