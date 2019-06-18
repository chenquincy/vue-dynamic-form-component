<template>
  <dynamic-form
    v-model="data"
    :descriptors="descriptors">
  </dynamic-form>
</template>

<script>
export default {
  name: 'hashmap-demo',
  data () {
    return {
      descriptors: {
        hashmap: {
          type: 'object',
          label: 'hashmap Object',
          defaultField: {
            type: 'object',
            fields: {
              boolean: { type: 'boolean', required: true },
              number: { type: 'number', required: true },
              string: { type: 'string', required: true, pattern: /^test$/g }
            }
          }
        }
      },
      data: {}
    }
  }
}
</script>