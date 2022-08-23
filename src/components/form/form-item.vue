<template>
  <div class="container">
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'lFormItem',
    components: {},
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    methods: {},
    watch: {}
  }
</script>

<style lang="scss" scoped>
  .container {
  }
</style>
