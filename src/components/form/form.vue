<template>
  <div class="container"></div>
</template>

<script>
  export default {
    name: 'lForm',
    props: {
      model: {
        type: Object,
        default: function () {
          return {}
        }
      },
      rules: {
        type: Object,
        default: function () {
          return {}
        }
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
